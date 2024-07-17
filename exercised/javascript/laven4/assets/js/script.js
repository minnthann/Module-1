/*
// အကြွင်းရလဒ် ၀ ရလျှင် ဖော်ပြပါ
var x = 0;
function y () {
    x ++;
    // alert (y);
    document.querySelector("h1").innerHTML = x;

    if (x % 3 === 0) {
        alert('You got it right, Now the number is ${x}');
    }
}

*/

/*
// auto ဆတိုး
var x = 0;

function y () {
    x = x + 1;
    document.querySelector("h1").innerHTML = x;

    document.querySelector('button').onclick = y;

setInterval(y, 1000);  //1 -0
}
setInterval(y, 1000);  //1-1
*/


// var x = 0;
// စက္ကန့်ရပ်


// တူ
// let x = 0 ;

if (!localStorage.getItem('key')) {
    localStorage.setItem ('key', 0);
}


function y () {
    let update = localStorage.getItem('key');
   update ++;
    document.querySelector('h1').innerHTML = update;
    localStorage.setItem('key', update);
}
document.querySelector('h1').innerHTML = localStorage.getItem('key');
document.querySelector('button').onclick = y;


// localStorage
// localStorage,getItem('key')
// localStorage.setItem('key', value)