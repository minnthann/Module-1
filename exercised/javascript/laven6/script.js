/*
document.addEventListener ("DOMContentLoaded", function () {
    fetch("https://open.er-api.com/v6/latest/USD")
    
    .then((response) => {
        return response.json();
    })

    // .then((data) => console.log(data))
    .then((data) => {
        const မြန်မာငွေ = data.rates.MDL;
        // console.log(rate);

        document.querySelector('body')
        .innerHTML = `ယနေ့ ဒေါ်လာပေါက်စျေးက ${မြန်မာငွေ.toFixed(2)} MMK ဖစ်ပါတယ်။`;
        // toFixed (2) ဒဿမဂဏန်းတွေ ပယ်
    })

    .catch((error) => {
        console.error("Error:", error);
    });
});

*/
// .then ((response) => {
//     if ()
//     throw new Erro ("Network response was not ok" + response. statusText);
// })

// fetch ယူတာ
// .then (res => )
// jsom ဖိုင်ပြောင်း 
// reeor 
// .then((response) => { 
    // if(မှားတယ်ဆိုရင်){
    // throw new error ("messagee", res.statusText)
// console.log(errorပြ)
//  မှန်တယ်ဆိုရင်   return response.json();
// } })

// error wed
// .catch((error) => {
//     console.error("Error:", error);


document.addEventListener ("DOMContentLoaded", function () {
    fetch("https://open.er-api.com/v6/latest/USD")
    .then((response) => {
        return response.json();
    })

    // .then((data) => console.log(data))
    .then((data) => {
        const မြန်မာငွေ = data.rates.MMK;
        // console.log(rate);

        document.querySelector('body')
        .innerHTML = `ယနေ့ ဒေါ်လာပေါက်စျေးက ${မြန်မာငွေ.toFixed()} MMK ဖစ်ပါတယ်။`;
    })

    .catch((error) => {
        console.error("Error:", error);
    });
});


/*

document.addEventListener ("DOMContentLoaded", function () {
    // 1
    fetch("https://open.er-api.com/v6/latest/USD")
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        const မြန်မာငွေ = data.rates.MMK;

        document.querySelector('body')
        .innerHTML = `today ${မြန်မာငွေ. toFiexd(2)} MMK ဖြစ်ပါတယ်။`;
    })
// 2 error ဖမ်း
    .catch((error) => {
        console.error("Error:", error);
    });
    
});

*/