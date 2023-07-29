javascript
function convert() {
    var inputTemp = document.getElementById("inputTemp").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var outputTemp = document.getElementById("outputTemp");

    if (inputUnit === "celsius") {
        var convertedTemp = (inputTemp * 9/5) + 32;
        outputTemp.innerHTML = inputTemp + "°C is equal to " + convertedTemp + "°F";
    } else if (inputUnit === "fahrenheit") {
        var convertedTemp = (inputTemp - 32) * 5/9;
        outputTemp.innerHTML = inputTemp + "°F is equal to " + convertedTemp + "°C";
    }
}
