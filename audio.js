// var path = require('path');
var av = require('tessel-av');
// console.log("__dirname",__dirname);
var mp3 = __dirname + '/NoOne.mp3';
// var sound = new av.Speaker(mp3);
var sound = new av.Player(mp3);

sound.play();

sound.on('ended', function(seconds) {
  sound.play();
  setInterval(function () {
  tessel.led[2].toggle();
  tessel.led[3].toggle();
}, 100);
});