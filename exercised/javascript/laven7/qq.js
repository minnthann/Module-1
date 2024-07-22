document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('form').onsubmit = function (){
        fetch("./currency.txt")
    // fetch("https://open.er-api.com/v6/latest/USD")
    // ဝဒ်ဆိုက်နာမည်ခေါ် သုံးမယ်
        .then((response) => response.json())
   
        // အပေါ်က ဒေတာ txt rate ကို ပြန်ခေါ်
        .then((data) => {
            // const myCurrency = data.rates.MMK;
    
           const cy = document.querySelector('#currency').value.toUpperCase();
          const rate = data.rates[cy];
        //   console.log(rate);

        if(rate !== undefined) {
            document.querySelector('#result')  .innerHTML = `1 USD is equal to ${rate.toFixed(2)} ${cy}.`;
        }else {
            document.querySelector('#result')  .innerHTML = `invalid Curency. try a valid currency aganin!`;
        }
            // let p = document.createElement('p');
            // document.querySelector('body').appendChild(p).innerHTML = 
            
        // cont rate = data.rates.AUD;
        // document.querySelector('body').textContent = rate;

            // document.querySelector('body').innerHTML = `this is the exchange rate 1-USD to MMK: ${myCurrency}`;

            // 
        })
        // အမှားစစ်ရန်
            .catch((error) => {
            console.log("Error", error);
           
        });

        return false;
    };
});