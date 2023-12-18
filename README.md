## Forma de uso

1. Entras a [gdb online](https://www.onlinegdb.com/)
2. En la parte superior derecha elegis un _lenguaje_ (por ejemplo: PHP)
3. Abris la consola (F12, varia el navegador y sistema operativo) y copias el script
4. Disfruta ! Desde este momento podes seleccionar multiples archivos, es como un simple input:multiple para seleccionar más de uno debes presionado **_shift_** o **_ctrl_**

```js
ide.upload_file = function () {
	$('#upload_file_container').html(
		'<input type="file" name="uploadfile" id="uploadfile" multiple>',
	),
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
			'source code' == t[0].name
				? ide.editor.setValue(e.content)
				: (ide.editor.set_files([e]), ide.gotoLine(e.name, 1)),
				ide.editor.focus();
		});
	}
};

addEventListener('keydown', (event) => {
	//f4 = 115 en keyCode
	if (event.keyCode == 115) {
		document.querySelector('#control-btn-upload').click();
	}
});
```

> Primera version: habilita la posibilidad de multiples archivos

> Segunda version: ahora al presionar la tecla "f4" simula tocar el botón de adjuntar archivos (shortcut)
