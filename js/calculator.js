/* calculator.js - Kalóriaszámláló logika
   Ez a fájl felel a "Saját interaktív program" követelményért.
*/

// Megvárjuk, amíg az oldal betöltődik
document.addEventListener('DOMContentLoaded', function() {
    
    // Megkeressük a gombot
    const calcButton = document.getElementById('calc-btn');

    // Ha a gomb létezik, hozzáadjuk az eseményfigyelőt
    if (calcButton) {
        calcButton.addEventListener('click', calculateCalories);
    }
});

function calculateCalories() {
    // 1. Adatok kinyerése az űrlapból
    const age = parseFloat(document.getElementById('calc-age').value);
    const weight = parseFloat(document.getElementById('calc-weight').value);
    const height = parseFloat(document.getElementById('calc-height').value);
    const genderElement = document.querySelector('input[name="calc-nem"]:checked');
    const activityLevel = parseFloat(document.getElementById('calc-activity').value);

    // 2. Alapvető ellenőrzés (hogy ne számoljunk üres vagy irreális adatokkal)
    // ... a változók kinyerése után (age, weight, height...)

    // 2. SZIGORÚBB ellenőrzés (kiegészítettük a <= 0 feltétellel)
    if (isNaN(age) || isNaN(weight) || isNaN(height) || !genderElement || weight <= 0 || height <= 0 || age <= 0) {
        alert("Hibás adat! Kérlek, minden mezőt tölts ki, és csak pozitív számokat használj!");
        return; // Kilépünk a függvényből, nem számol tovább
    }

    // ... innentől jön a gender = genderElement.value stb. (ez maradhat a régi)

    const gender = genderElement.value;
    let bmr; // Basal Metabolic Rate (Alapanyagcsere)

    // 3. Számítás a Mifflin-St Jeor képlet alapján
    // Férfi: (10 × súly) + (6.25 × magasság) - (5 × kor) + 5
    // Nő: (10 × súly) + (6.25 × magasság) - (5 × kor) - 161
    
    if (gender === 'ferfi') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // 4. A végső napi kalóriaigény kiszámítása az aktivitás alapján
    const totalCalories = Math.round(bmr * activityLevel);

    // 5. Eredmény megjelenítése a HTML-ben
    const resultBox = document.getElementById('result');
    const caloriesOutput = document.getElementById('calories-output');

    // Beírjuk a számot
    caloriesOutput.textContent = totalCalories + " kcal";

    // Megjelenítjük a dobozt (eddig rejtve volt CSS-sel)
    resultBox.style.display = 'block';
}