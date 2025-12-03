/* main.js - BATGYM: Logós Menü + Validálás */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. MOBIL MENÜ (A LOGÓRA KATTINTVA) ---
    const logo = document.querySelector(".logo");
    const navMenu = document.querySelector(".menu");

    if (logo && navMenu) {
        // Ha rányomsz a BATGYM logóra
        logo.addEventListener("click", () => {
            // Csak mobilon (768px alatt) nyissa meg
            if (window.innerWidth <= 768) {
                navMenu.classList.toggle("active");
            }
        });

        // Ha választasz egy menüpontot, zárja be
        document.querySelectorAll(".menu a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    // --- 2. ŰRLAP VALIDÁLÁS (A pontokért) ---
    const form = document.getElementById('regForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Ne küldje el hibásan

            // Mezők behúzása
            const nevInput = document.getElementById('nev');
            const emailInput = document.getElementById('email');
            const ageInput = document.getElementById('age');
            const aszfInput = document.getElementById('aszf');
            const celInput = document.getElementById('cel');

            let hasError = false;

            // Név ellenőrzése
            if (nevInput.value.trim() === '') {
                showError(nevInput, 'nev-error', 'A név kötelező!');
                hasError = true;
            } else {
                clearError(nevInput, 'nev-error');
            }

            // Email ellenőrzése
            if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
                showError(emailInput, 'email-error', 'Helyes emailt adj meg!');
                hasError = true;
            } else {
                clearError(emailInput, 'email-error');
            }

            // Kor ellenőrzése
            if (ageInput.value < 14 || ageInput.value > 99) {
                ageInput.classList.add('input-error');
                hasError = true;
            } else {
                ageInput.classList.remove('input-error');
            }

            // Cél ellenőrzése
            if (celInput.value === "") {
                celInput.classList.add('input-error');
                hasError = true;
            } else {
                celInput.classList.remove('input-error');
            }

            // ÁSZF
            if (!aszfInput.checked) {
                showError(aszfInput, 'aszf-error', 'Kötelező elfogadni!');
                hasError = true;
            } else {
                clearError(aszfInput, 'aszf-error');
            }

            // Siker
            if (!hasError) {
                alert('Sikeres regisztráció!');
                form.reset();
            }
        });
    }
});

// Segédfüggvények (Hiba kiírás/törlés)
function showError(input, id, msg) {
    input.classList.add('input-error');
    const span = document.getElementById(id);
    if (span) { span.textContent = msg; span.style.display = 'block'; }
}

function clearError(input, id) {
    input.classList.remove('input-error');
    const span = document.getElementById(id);
    if (span) { span.style.display = 'none'; }
}
