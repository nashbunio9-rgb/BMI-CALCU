function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);

    if (Number.isNaN(weight) || Number.isNaN(heightCm)) {
        alert("Please enter both weight and height!");
        return;
    }

    if (weight <= 0 || heightCm <= 0) {
        alert("Weight and height must be positive numbers.");
        return;
    }

    const height = heightCm / 100;
    const bmiValue = weight / (height * height);
    const bmi = bmiValue.toFixed(1);
    
    let category = "";

    if (bmiValue < 18.5) category = "Underweight";
    else if (bmiValue < 25) category = "Normal weight";
    else if (bmiValue < 30) category = "Overweight";
    else category = "Obese";

    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "Your BMI is <strong>" + bmi + "</strong> (" + category + ")";
}

document.getElementById('calcBtn')?.addEventListener('click', calculateBMI);
document.getElementById('height')?.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') calculateBMI();
});
document.getElementById('weight')?.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') calculateBMI();
});
