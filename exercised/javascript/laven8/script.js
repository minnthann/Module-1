
function x(a) {
    console.log("a")
    console.log("ygn")
}
x("heloo");


const z = function () {
    console.log("hello")
}
z();

let printMe = function (a, b) {
    console.log(a  + b);
}
printMe(10, 20);


let printMe = function (a, b) {
    console.log(2 * (a  + b));
}
printMe(10, 20);


let yangon = function(b, c=4){
    console.log(9 * (b + c));
}
yangon(5);

// (အာကုမန့်)

// {ဘာလေ့ာ ကစ္စဆောင်ရွက်ရန်}
function aa (mg, ko) {
    console.log (mg, ko);
}
aa("ka, la")


// ...b ထဲမှာ အကုန်ထည့်ပေးပါ
// console.log နေရာမှာ return ရေးထည့်လို့ ရပါသည်  ၁တခုပဲ ထွက်ပါသည်
// return တခုပဲ ရေးလို့ရ

function az (a, ...b) {
    console.log(a);
    console.log(b);
}
az(1, 2, 3, 4, 5, 6, 7, 8,);


function az (a, ...b) {
    return a, b;
}
az(1, 2, 3, 4, 5, 6, 7, 8,);


function az (a, ...b) {
    return a + b;
}
az(1, 2, 3, 4, 5, 6, 7, 8,);



function u (a,b) {
    return a + b ;
}
u(2,3);
5

var x = (a, b) => {
    return a + b;
}
x (2,3);

// =>ပါရင် {} ရှောင်
var x = (a, b) =>  a + b;
x (2,3);


let outer = function () {
    console.log("Outer function ပါနော်");
    function inner () { 
        console.log ("inner function လေးက အတွင်းက");
    }
    inner();
}
outer ();


function x () {
     var a = "hello";
     let b = "first";
     const c = "you";
     console.log(a, b, c);
}
x ();


    var a = "hello";
    let b = "first";
    const c = "you";
function x () {
    console.log (a, b, c);
}


function a() {
    var p = 29;
    console.log(p);
}
a ();

// ဖန်ရှင်နှစ်ထပ်

function outer(a) {

    function inner (b) {
        return a + b;
    }
    let x = inner (3);
    return x;

}
outer(3);

// ၃ထပ်

function one () {
    console.log ("in one");
}
function tow () {
    console.log("in tow");
}
// စက္ကန့်နဲ့ ပေါ်ခြင်း
setTimeout("one, 2000");
tow ();


function one () {
    console.log ("in one");
    setTimeout(tow, 3000);
}
function tow () {
    console.log("in tow");
}
// စက္ကန့်နဲ့ ပေါ်ခြင်း
setTimeout(one, 2000);



function one (cd) {
    console.log ("in one");
    setTimeout(cd, 3000);
}
function tow (m) {
    console.log(m);
}
setTimeout(() => one(() => tow("in tow")), 3000); 
// setTimeout က function msစက္ကန့် ထည်ရ

