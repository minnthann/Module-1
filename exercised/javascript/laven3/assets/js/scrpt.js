
// javascript လင့်ချိတ်မချိတ် စစ်နည်း
// step   1 getting RTCPeerConnection
// alert("welcome!")

// step 2
// var counter = 0;
// counter = counter + 1; 

// // တူ
// counter += 1;
// alert(counter);

// step 3

// counter = counter + 1;
// counter+=1;
// counter +=1;
// counter ++;
 
/*
// step 3 onattribute "onckick= functionName()"
let counter = 0;
function count () {
    counter ++;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0) {
        alert ("good jog");
    }
}
    */



// alert ဖော်ပြချက်
// step 4
let counter = 0;

function count (){
    counter ++;
    document.querySelector ('h1').innerHTML = counter ;
 
    if (counter % 10 ===0) {
        alert(`သိပ်တော်တာပဲ အခုနံပါတ်က ${counter}`);
    }
}
document.addEventListener ('DOMContentLoaded', function() {
    // document.querySelector('button').addEventListener('click', count());

    // event ဟန်တလာ
    document.querySelector('button').onclick=count;
});
