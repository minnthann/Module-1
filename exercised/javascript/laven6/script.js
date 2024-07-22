document.addEventListener ("DOMContentLoaded", function () {
    // fetch("https://open.er-api.com/v6/latest/USD")
    fetch("https://open.er-api.com/v6/latest/USD")
    .then((response) => {
        return response.json();
    })

    // .then((data) => console.log(data))
    .then((data) => {
        const မြန်မာငွေ = data.rates.MMK;
        // console.log(rate);

        document.querySelector("body")
        .innerHTML = "ယနေ့ ဒေါ်လာပေါက်စျေးက ${မြန်မာငွေ.toFixed(2)} MMK ဖစ်ပါတယ်။";
    })

    .catch((error) => {
        console.error("Error:", error);
    });
});

// .then ((response) => {
//     if ()
//     throw new Erro ("Network response was not ok" + response. statusText);
// })