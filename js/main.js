document.addEventListener('DOMContentLoaded', function() {
    

    const logo = document.querySelector(".logo");
    const navMenu = document.querySelector(".menu");

    if (logo && navMenu) {

        logo.addEventListener("click", () => {

            if (window.innerWidth <= 768) {
                navMenu.classList.toggle("active");
            }
        });


        document.querySelectorAll(".menu a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    const form = document.getElementById('regForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

    
            const nevInput = document.getElementById('nev');
            const emailInput = document.getElementById('email');
            const ageInput = document.getElementById('age');
            const aszfInput = document.getElementById('aszf');
            const celInput = document.getElementById('cel');

            let hasError = false;

    
            if (nevInput.value.trim() === '') {
                showError(nevInput, 'nev-error', 'A név kötelező!');
                hasError = true;
            } else {
                clearError(nevInput, 'nev-error');
            }

        
            if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
                showError(emailInput, 'email-error', 'Helyes emailt adj meg!');
                hasError = true;
            } else {
                clearError(emailInput, 'email-error');
            }

        
            if (ageInput.value < 14 || ageInput.value > 99) {
                ageInput.classList.add('input-error');
                hasError = true;
            } else {
                ageInput.classList.remove('input-error');
            }

        
            if (celInput.value === "") {
                celInput.classList.add('input-error');
                hasError = true;
            } else {
                celInput.classList.remove('input-error');
            }

        
            if (!aszfInput.checked) {
                showError(aszfInput, 'aszf-error', 'Kötelező elfogadni!');
                hasError = true;
            } else {
                clearError(aszfInput, 'aszf-error');
            }

        
            if (!hasError) {
                alert('Sikeres regisztráció!');
                form.reset();
            }
        });
    }
});


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
