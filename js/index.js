'use strict';

var body = document.querySelector('body');
var audio = document.querySelector('audio');
var initNote = document.querySelector('.init-note');
var display = document.querySelector('.display');
body.addEventListener('keydown', function (e) {
	var key = document.querySelector('.key');
	var keyCode = document.querySelector('.keycode-display');
	display.style.display = 'table';
	initNote.style.display = 'none';
	key.innerHTML = e.key;
	keyCode.innerHTML = e.keyCode;
	audio.play();
	audio.currentTime = 0;
});