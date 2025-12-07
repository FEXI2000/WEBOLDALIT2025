document.addEventListener('DOMContentLoaded', function() {
    
    const calcButton = document.getElementById('calc-btn');

    if (calcButton) {
        calcButton.addEventListener('click', calculateCalories);
    }
});

function calculateCalories() {
    const age = parseFloat(document.getElementById('calc-age').value);
    const weight = parseFloat(document.getElementById('calc-weight').value);
    const height = parseFloat(document.getElementById('calc-height').value);
    const genderElement = document.querySelector('input[name="calc-nem"]:checked');
    const activityLevel = parseFloat(document.getElementById('calc-activity').value);

    if (isNaN(age) || isNaN(weight) || isNaN(height) || !genderElement || weight <= 0 || height <= 0 || age <= 0) {
        alert("Hibás adat! Kérlek, minden mezőt tölts ki, és csak pozitív számokat használj!");
        return; 
    }

    const gender = genderElement.value;
    let bmr; 
    
    if (gender === 'ferfi') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    const totalCalories = Math.round(bmr * activityLevel);

    const resultBox = document.getElementById('result');
    const caloriesOutput = document.getElementById('calories-output');

    caloriesOutput.textContent = totalCalories + " kcal";

    resultBox.style.display = 'block';
}
