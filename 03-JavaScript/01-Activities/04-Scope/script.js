var sout = 'shout';

function justshout () {
  console.log ('shout' + 'shout');
  return;
}

function shoutjustshout () {
  console.log ('shout' + 'it all out');
  return;
}

justshout();
shoutjustshout();

function saylion() {
  var animenl = 'lion';
  console.log('animent');
  return;
}

function saytigers(){
  var animenl = 'tigers';
  console.log('and' +animenl+ 'and');
  return;
}


var bears = 'bears';

function saybears () {
  console.log('bears' + 'oh my');
  return;
}

saylion();
saytigers();
saybears();

function singalong() {
var sing = 'sing';
console.log('sing' + ',');
var singasong = function() {
  console.log('sing' + 'a song.');
};
singasong();
}
singalong();