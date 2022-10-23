ide.upload_file = function () {
  $('#upload_file_container').html('<input type="file" name="uploadfile" id="uploadfile" multiple>'),
    $('#upload_file_container input').on('change', on_file_uploaded),
    $('#upload_file_container input').click();
};

var on_file_uploaded = function () {
  var e = this.files;
  for (let i = 0; i < e.length; i++) {
    new Promise(function (t) {
      var n = new FileReader();
      n.readAsText(e[i]),
        (n.onload = function () {
          t({ name: e[i].name, content: n.result });
        });
    }).then(function (e) {
      var t = ide.editor.get_files();
      'source code' == t[0].name ? ide.editor.setValue(e.content) : (ide.editor.set_files([e]), ide.gotoLine(e.name, 1)), ide.editor.focus();
    });
  }
};
