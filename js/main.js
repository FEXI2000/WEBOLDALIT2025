/* main.js - Általános scriptek és űrlap validáció
    Készítette: [A Te Neved]
*/

// Megvárjuk, amíg az oldal betöltődik
document.addEventListener('DOMContentLoaded', function() {
    
    // Megkeressük az űrlapot az ID alapján
    const form = document.getElementById('regForm');

    // Csak akkor futtatjuk, ha az űrlap létezik az oldalon (hogy ne adjon hibát más oldalakon)
    if (form) {
        form.addEventListener('submit', function(e) {
            
            // 1. Megakadályozzuk az alapértelmezett elküldést (hogy tudjunk ellenőrizni)
            e.preventDefault();

            // Változók a mezőkhöz
            const nevInput = document.getElementById('nev');
            const emailInput = document.getElementById('email');
            const ageInput = document.getElementById('age');
            const aszfInput = document.getElementById('aszf');
            const celInput = document.getElementById('cel');

            // Hibaállapot jelző (kezdetben nincs hiba)
            let hasError = false;

            // --- VALIDÁCIÓS LOGIKA ---

            // 1. Név ellenőrzése (nem lehet üres)
            if (nevInput.value.trim() === '') {
                showError(nevInput, 'nev-error', 'A név megadása kötelező!');
                hasError = true;
            } else {
                clearError(nevInput, 'nev-error');
            }

            // 2. Email ellenőrzése (egyszerű mintaillesztés)
            if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
                showError(emailInput, 'email-error', 'Kérlek, valós email címet adj meg!');
                hasError = true;
            } else {
                clearError(emailInput, 'email-error');
            }

            // 3. Életkor ellenőrzése (szám és tartomány)
            if (ageInput.value < 14 || ageInput.value > 99) {
                // Itt alertet használunk példaként, vagy színezhetjük a keretet
                ageInput.classList.add('input-error');
                hasError = true;
            } else {
                ageInput.classList.remove('input-error');
            }

            // 4. Cél kiválasztása (Select)
            if (celInput.value === "") {
                celInput.classList.add('input-error');
                hasError = true;
            } else {
                celInput.classList.remove('input-error');
            }

            // 5. ÁSZF elfogadása (Checkbox)
            if (!aszfInput.checked) {
                showError(aszfInput, 'aszf-error', 'A szabályzat elfogadása kötelező!');
                hasError = true;
            } else {
                clearError(aszfInput, 'aszf-error');
            }

            // --- VÉGEREDMÉNY ---
            
            if (!hasError) {
                // Ha nincs hiba, sikeresnek tekintjük
                alert('Sikeres regisztráció! Köszönjük.');
                // Itt lehetne elküldeni a szerverre az adatokat: form.submit();
                // Mi most csak töröljük a mezőket:
                form.reset();
            }
        });
    }
});

// Segédfüggvény a hiba megjelenítésére (Hogy ne kelljen mindig ugyanazt leírni)
function showError(inputElement, errorSpanId, message) {
    inputElement.classList.add('input-error'); // Piros keret hozzáadása
    const errorSpan = document.getElementById(errorSpanId);
    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.style.display = 'block'; // Szöveg megjelenítése
    }
}

// Segédfüggvény a hiba törlésére
function clearError(inputElement, errorSpanId) {
    inputElement.classList.remove('input-error'); // Piros keret levétele
    const errorSpan = document.getElementById(errorSpanId);
    if (errorSpan) {
        errorSpan.style.display = 'none'; // Szöveg elrejtése
    }
}

