
// var x = 10;

// function y () {
//     x ++;
//     // alert (y);
//     document.querySelector("h1").innerHTML = x;

//     if (x % 3 === 0) {
//         alert('You got it right, Now the number is ${x}');
//     }
// }

/*
// 2
var x = man;

function y () {
    x = x + "1";
    // alert (y);
    document.querySelector("h1").innerHTML = x;

    if (x % 3 === 0) {
        alert('You got it right, Now the number is ${x}');
    }
}
    */
/*
auto ဆတိုး
var x = 0;

function y () {
    x = x + 1;
    document.querySelector("h1").innerHTML = x;

    document.querySelector('button').onclick = y;

setInterval(y, 1000);  //1 -0
}
setInterval(y, 1000);  //1-1
*/

/*
// var x = 0;
// စက္ကန့်ရပ်

if (!localStorage.getItem('mm')) {
    localStorage.setItem('mm', 0);
}
function y () {
    let mm = localStorage.getItem('x');
        mm ++;

        document.querySelector("h1").innerHTML = mm;
        localStorage.setItem('x', mm);
}

document.querySelector('h1').innerHTML = localStorage.getItem('x');
document.querySelector('button').onclick = q;    

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
*/



// function ygn () {
//     if(document.querySelector('h1').innerHTML === "hello, ygn") {
//         document.querySelector ('h1').innerHTML = "မင်္ဂလာပါ"း
//     }else {
//         document.querySelector('h1').innerHTML = "hello ygn";
//     }
    
// }

// ဖောင့်မှာ နာမည်ဖြည့်

/*
document.querySelector('#submit').disabled = true;

document.querySelector('#name').onkeyup = function() {
    document.querySelector('#submit').disabled = false;
}

document.querySelector('form').onsubmit = function() {
    let urName = document.querySelector('#name').value;
    alert('မင်္ဂလာပ, ${urName}');
}
*/

// li .ကို ဖျေက်ထားနည်း
document.querySelector('#submit').disabled = true;

//၁၀. on 8  စာမရေးပဲ submiနိုပ်မရအောင် လုပ်နည်း
document.querySelector('#task').onkeyup = function () {
    if (document.querySelector('#task').value.length > 0) {
        document.querySelector('#submit').disabled = false;
    }else {
        document.querySelector('#submit').disabled = true;
    }
}
/*
    //8. အပေါ်က သုံးမယ်ဆို မလိုပါ
    // onkeyup ရေးသားနည်း
    document.querySelector('#task').onkeyup = function () {
    // ရေးထားပီသား ပြန်ဖော်ပြ
    document.querySelector('#submit').disabled = false;

}
*/ 
// function အစားထိုးခြင်း
// = () => {

// }
// ၇.
document.querySelector("form").onsubmit = function () {
    //၂. ရေးထားပီးသောစားကို သိမ်း
    // placeholder ထဲမှာ ထည့်လိုက်တဲ့စာကို သိမ်းရန်
    let taskContainer = document.querySelector('#task').value;
    //၃. အသစ်သစ် မှန်သမျှထည့်// const ရေးလို့လည်းရ
    // li ကိုအသစ်တည်ဆောက်
    let li = document.createElement('li');
    //၄. အပေါ်ကစာကို ဒီမှာထည့်
    // ထည့်ပြီးစာများကို li ထဲသို့ထားရန်
    li.innerHTML = taskContainer;
    //၅. သိမ်းထားသော နေရာ
    // ul > li ထည့်
    document.querySelector('#tasks').append(li);

    //၆. ရေးထားတဲ့ စာ ဖျောက်
    // placeholder ထဲက ရိုက်ပြီးစာများ မကျန်အောင်ပြုခြင်း
    document.querySelector('#task').value = "";

    //၉. စာမပါရင် submit  နိုပ်မရပါနဲ့ 
    // စာမရေးဘဲ နိုပ်မရအောင် လုပ်ထားခြင်း
    document.querySelector('#submit').disabled = true;
    //၁. မပျောက်စေချင်ရင်
    // submit-နိပ်လိုက်သောအခါ page refresh မလုပ်ရန်
    return false;
}
