"use strict"; //save sile


function htmlOption () {
    let departure = document.querySelector ("#departure");
    let arrival = document.querySelector("#arrival");
    
//     airports.forEach((ap) => {
//         let option = document.createElement("option");
//         option.value = ap.iata;
//         option.textContent = `${ap.name} (${ap.iata})`;
//         departure.appendChild(option);
// // ပြန်မရးလိုလျှင်  clone လုပ်ပံု
//         arrival.appendChild(option.cloneNode(true));
//     }); 

    airports.forEach ((ap) => {
        let optionAp = `<option value="${ap.iata}" > ${ap.name} (${ap.iata})></option>`;
        departure.insertAdjacentHTML("beforeend", optionAp);
        arrival.insertAdjacentHTML("beforeend", optionAp);
    })

}

function checkFlight (){
  let departureIATA = document.querySelector("#departure").value;
  let arrivalIATA = document.querySelector ("#arrival").value;
  let showResult = document.querySelector("#result");

  if(!departureIATA || !arrivalIATA) {
    console.log("Error");
    showResult.textContent = "Select both departure and arrival airopsts ! Message";
    return;
  }

  let flight= flights.find(
(f) =>f.departureIATA === departureIATA && f.arrivalIATA === arrivalIATA
  );

   let departureAp= airports.find((a) => a.iata === departureIATA); 
   let arrivalAp = airports.find((a) => a.iata === arrivalIATA);

   if(flight && departureAp && arrivalAp) {
    showResult.innerHTML = `
    <h2 class="resulth2">Flight status</h2>

    <p class="subTitle"> Departure Airoprt: <span class="details"> ${departureAp.name} (${departureAp.iata})</span></p>

    <p class="subTitle"> Arrival Airoprt:  <span class="details">${arrivalAp.name} (${arrivalAp.iata})</span><p/>

    <p class="subTitle"> Departure Time: <span class="details">${flight.departureTime} </span><p/>
    <p class="subTitle"> Arrival Time: <span class="details">${flight.arrivalTime}</span><p/>

    <p class="subTitle"> Departure Date: <span class="details">${flight.departureTime}</span> <p/>
    <p> Arrival Date: <span class="details">${flight.arrivalTime}</span><p/>
    `;
   }else {
    showResult.innerHTML = "Flight details NOT found!";
   }
}

// document.querySelector('#checkStatus').addEventListener("click", checkFlight);


document.addEventListener("DOMContentLoaded", ()=> {
    htmlOption();
    checkFlight();
    document.querySelector("#checkStatus").addEventListener("click", checkFlight);
});