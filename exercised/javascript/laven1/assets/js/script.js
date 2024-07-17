/*
// clickကို တကြိမ်တည်းသာနိုပ်လို့ရပါသည်
// step 1
function hello () {
    document.querySelector("h1").innerHTML = "welcome to pannacollage! 2024";
}
*/

/*
// step 2
function hello () {
    if (document.querySelector("h1").innerHTML === "Hello, ygn") {
        document.querySelector("h1").innerHTML = "welcome to pannoCollage! 2024";   
    }else  {
        document.querySelector("h1"). innerHTML = "Hello, ygn";
    }
      
}
*/



// step 3
// shorthand
let heading = document.querySelector("h1");
function hello () {
    if (heading.innerHTML === "Hello, ygn") {
        heading.innerHTML = "welcome to pannoCollage! 2024";   
    }else  {
        heading.innerHTML = "Hello, ygn";
    }
      
}
    