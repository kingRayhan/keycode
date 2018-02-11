'use strict';

var body = document.querySelector('body');
body.addEventListener('keydown', function (e) {
	var key = document.querySelector('.key');
	var keyCode = document.querySelector('.keycode-display');
	key.innerHTML = e.key;
	keyCode.innerHTML = e.keyCode;
});