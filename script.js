function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
const celsiusInput = document.getElementById("celsius");
const convertButton = document.getElementById("convert");
const resultElement = document.getElementById("result");
convertButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
        resultElement.textContent = `${fahrenheitValue.toFixed(2)} °F`;
    } else {
        resultElement.textContent = "Invalid input.";
    }
});
