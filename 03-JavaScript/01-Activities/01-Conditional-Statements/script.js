// Changed the values and operators to test if the algorithm meets all conditions
var x = 50;
var exp1 = x < 25;
var exp2 = x > 50;

if (exp1 && exp2) {
  console.log('True True');

} else if (exp1) {
  console.log('True False');

} else if (exp2) {
  console.log('False True');

} else {
  console.log('False False ');
}
