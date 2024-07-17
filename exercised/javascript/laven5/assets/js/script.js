

// ဖောင့်မှာ နာမည်ဖြည့်


// document.querySelector('#submit').disabled = true;

// document.querySelector('#name').onkeyup = function() {
//     document.querySelector('#submit').disabled = false;
// }


document.querySelector('form').onsubmit = function() {
    let urName = document.querySelector('#name').value;
    alert('မင်္ဂလာပါ, ${urName}');
}
