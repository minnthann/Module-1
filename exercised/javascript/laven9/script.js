// document.querySelector('h1').style.color = "red";

// document.querySelector('#red').onclick = function(){
//     document.querySelector('#color').style.color = "red"; 
// }

// document.querySelector('#orange').onclick = function () {
//     document.querySelector('#color').style.color = "blue"; 
// }

// document.querySelector('#green').onclick = function () {
//     document.querySelector('#color').style.color = "green"; 
// }

// document.querySelector('#purple').onclick = function () {
//     document.querySelector('#color').style.color = "purple"; 
// }


// document.querySelectorfAll(".btn").forEach(
//     function(btn){
//         btn.onclick = function(){
//             document.querySelector("#color").style.color = btn.dataset.color;
//         }
// });

document.querySelector('select').onchange = function () {
    document.querySelector('#color').style.color = this .value;
}


/*
for(var e = 0; e <= 10; e++){
// do this
}
// တူ 

forEach (
    function(){
        // do this
    }
)
*/















// document.querySelectorfAll('.btn').forEach(
//     function(){
//         document.querySelector('#color').style.color =button.dataset.color;
//     }
// )

// for (var i = 0; i < 4; i++){
//     document.querySelector('#color').style.color =button.dataset.color;
// }