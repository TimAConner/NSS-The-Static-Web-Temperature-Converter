
var convertButton = document.getElementById("btn-convert");
var clearButton = document.getElementById("btn-clear");   
var tempInput = document.getElementById("temperature").value;
var tempOutput = document.getElementById("converted-temperature");

//Clear the input
function clear(){
    document.getElementById("temperature").value = "";
}

//Change the output color
function changeColor(tempMeasure, temp){
    if((tempMeasure === "f" && temp >= 90) || (tempMeasure === "c" && temp >= 32)){
        tempOutput.style.color = "red";
    } else if((tempMeasure === "f" && temp <= 32) || (tempMeasure === "c" && temp <= 0)){
        tempOutput.style.color = "blue"; 
    } else {
        tempOutput.style.color = "green";
    }
}

//Refresh the input value
function refreshInput(){
    tempInput = document.getElementById("temperature").value;
}

function toCelsius () {
    refreshInput();
    var convertedTemp;
    convertedTemp = (5/9*(tempInput-32));
    tempOutput.innerHTML = convertedTemp;
    changeColor("c", convertedTemp);
}

function toFahrenheit () {
    refreshInput(); 
    var convertedTemp;
    convertedTemp = ((tempInput * 1.8) + 32);
    tempOutput.innerHTML = convertedTemp;
    changeColor("f", convertedTemp);
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {
    if(document.getElementById("fahrenheit").checked){
        toFahrenheit();
    } else { //Is celsius
        toCelsius();
    }
}

document.getElementById("temperature").onkeypress = function(input){
    if(input.keyCode == 13){
        determineConverter();
    }
};


// Assign a function to be executed when the button is clicked
convertButton.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clear);