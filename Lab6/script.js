//2 a
function checkValue(input) {
    const errorMessage = input.nextElementSibling;
    if (input.value.trim() === "") {
        errorMessage.textContent = "To pole jest wymagane.";
        input.setCustomValidity("To pole jest wymagane.");
    } else {
        errorMessage.textContent = "";
        input.setCustomValidity("");
    }
}

// 2 b
function checkLength(input, minLength) {
    const errorMessage = input.nextElementSibling;
    if (input.value.length < minLength) {
        errorMessage.textContent = `To pole musi zawierać co najmniej ${minLength} znaków.`;
        input.setCustomValidity(`To pole musi zawierać co najmniej ${minLength} znaków.`);
    } else {
        errorMessage.textContent = "";
        input.setCustomValidity("");
    }
}

// 2 c
function checkEmail(input) {
    const errorMessage = input.nextElementSibling;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(input.value)) {
        errorMessage.textContent = "Proszę podać poprawny adres email.";
        input.setCustomValidity("Proszę podać poprawny adres email.");
    } else {
        errorMessage.textContent = "";
        input.setCustomValidity("");
    }
}

// 2 d
function checkPasswordStrength(input) {
    const errorMessage = input.nextElementSibling;
    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!strongPasswordPattern.test(input.value)) {
        errorMessage.textContent = "Hasło musi zawierać co najmniej 8 znaków, w tym jedną wielką literę, jedną małą literę i jedną cyfrę.";
        input.setCustomValidity("Hasło musi zawierać co najmniej 8 znaków, w tym jedną wielką literę, jedną małą literę i jedną cyfrę.");
    } else {
        errorMessage.textContent = "";
        input.setCustomValidity("");
    }
}
// 4a
function checkAge(input) {
    const errorMessage = input.nextElementSibling;
    const dob = new Date(input.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (age < 18) {
        errorMessage.textContent = "Musisz mieć co najmniej 18 lat.";
        input.setCustomValidity("Musisz mieć co najmniej 18 lat.");
    } else {
        errorMessage.textContent = "";
        input.setCustomValidity("");
    }
}

// 5
function checkPasswordsMatch(passwordInput, confirmPasswordInput) {
    const errorMessage = confirmPasswordInput.nextElementSibling;
    if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessage.textContent = "Hasła muszą być takie same.";
        confirmPasswordInput.setCustomValidity("Hasła muszą być takie same.");
    } else {
        errorMessage.textContent = "";
        confirmPasswordInput.setCustomValidity("");
    }
}


// 7
function checkCountry(input) {
    const wojewodztwo = document.getElementById('wojewodztwo');
    const adresZamieszkania = document.getElementById('adresZamieszkania');
    if (input.value.trim().toLowerCase() === "polska") {
        wojewodztwo.disabled = false;
        adresZamieszkania.disabled = false;
        wojewodztwo.type = 'select';
        wojewodztwo.innerHTML = `
            <option value="">Wybierz województwo...</option>
            <option value="dolnośląskie">Dolnośląskie</option>
            <option value="kujawsko-pomorskie">Kujawsko-Pomorskie</option>
            <option value="lubelskie">Lubelskie</option>
            <option value="lubuskie">Lubuskie</option>
            <option value="łódzkie">Łódzkie</option>
            <option value="małopolskie">Małopolskie</option>
            <option value="mazowieckie">Mazowieckie</option>
            <option value="opolskie">Opolskie</option>
            <option value="podkarpackie">Podkarpackie</option>
            <option value="podlaskie">Podlaskie</option>
            <option value="pomorskie">Pomorskie</option>
            <option value="śląskie">Śląskie</option>
            <option value="świętokrzyskie">Świętokrzyskie</option>
            <option value="warmińsko-mazurskie">Warmińsko-Mazurskie</option>
            <option value="wielkopolskie">Wielkopolskie</option>
            <option value="zachodniopomorskie">Zachodniopomorskie</option>
        `;
    } else {
        wojewodztwo.disabled = true;
        adresZamieszkania.disabled = true;
        wojewodztwo.type = 'text';
    }
}

// 8a
function limitToNumbers(input) {
    input.value = input.value.replace(/\D/g, '');
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const inputs = form.querySelectorAll('input, select');
    const checkboxAdresTakiSam = document.getElementById('adresTakiSam');
    const adresKorespondencyjny = document.getElementById('adresKorespondencyjny');
    const kraj = document.getElementById('kraj');

    checkboxAdresTakiSam.addEventListener('change', () => {
        if (checkboxAdresTakiSam.checked) {
            adresKorespondencyjny.disabled = true;
            adresKorespondencyjny.hidden = true;
        } else {
            adresKorespondencyjny.disabled = false;
            adresKorespondencyjny.hidden = false;
        }
    });

    kraj.addEventListener('change', (e) => {
        checkCountry(e.target);
    });

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            switch (input.name) {
                case 'email':
                    checkEmail(input);
                    break;
                case 'haslo':
                    checkPasswordStrength(input);
                    break;
                case 'powtorzHaslo':
                    checkPasswordsMatch(document.getElementById('haslo'), input);
                    break;
                case 'dataUrodzenia':
                    checkAge(input);
                    break;
                case 'telefon':
                    limitToNumbers(input);
                    break;
                default:
                    checkValue(input);
                    if (input.id === 'imie' || input.id === 'nazwisko') {
                        checkLength(input, 3);
                    }
                    break;
            }
        });
    });

    form.addEventListener('submit', (event) => {
        inputs.forEach(input => {
            input.dispatchEvent(new Event('input'));
        });

        const isFormValid = form.checkValidity();
        if (isFormValid) {
            alert('Formularz został poprawnie wypełniony.');
        } else {
            event.preventDefault();
        }
    });
});
