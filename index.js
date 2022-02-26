//To calculate revenue from a solar generation site, we need to multiply the system size, the yield and the $rate.

//Declaring a button variable, which is bound to the #btn id in the html file

const button = document.getElementById("btn");
button.addEventListener("click", calculate); //When we click the button, the calculate function gets called.
const clearInputs = document.getElementById("clearInputs");
clearInputs.addEventListener("click", clear); //When we click the button, the clear function gets called.

function calculate() {
    const systemSize = document.getElementById("systemSize").value;
    const systemYield = document.getElementById("systemYield").value;
    const ratePerKWh = document.getElementById("ratePerKWh").value;

    const result = systemSize*systemYield*ratePerKWh; // the calculation of the output number. 

    return document.getElementById("showResult").innerHTML = '$'+ result.toLocaleString();
}

function clear() {
    inputs = document.querySelectorAll('#systemSize, #systemYield, #ratePerKWh');
    inputs.forEach(input => input.value = '')};








