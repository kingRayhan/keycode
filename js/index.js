'use strict';

var body = document.querySelector('body');
var audio = document.querySelector('audio');
body.addEventListener('keydown', function (e) {
	var key = document.querySelector('.key');
	var keyCode = document.querySelector('.keycode-display');
	key.innerHTML = e.key;
	keyCode.innerHTML = e.keyCode;
	audio.play();
	audio.currentTime = 0;
});