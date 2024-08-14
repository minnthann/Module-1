document.querySelector('h1').style.color = "red";

document.querySelector('#red').onclick = function(){
    document.querySelector('#color').style.color = "red"; 
}

document.querySelector('#orange').onclick = function () {
    document.querySelector('#color').style.color = "blue"; 
}

document.querySelector('#green').onclick = function () {
    document.querySelector('#color').style.color = "green"; 
}

document.querySelector('#purple').onclick = function () {
    document.querySelector('#color').style.color = "purple"; 
}
