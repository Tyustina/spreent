const form = document.querySelector('.form__content');

export const submitForm = () => {
    form.addEventListener('submit', function (e) {
        clearErrors();

        let isValid = true;

        const nameInput = form.querySelector('.form__input--name');
        const nameValue = nameInput.value.trim();
        if (!nameValue) {
            showError(nameInput, 'Введите ваше имя');
            isValid = false;
        } else if (!isValidName(nameValue)) {
            showError(nameInput, 'Введите корректно ваше имя');
            isValid = false;
        }

        const telInput = form.querySelector('.form__input--tel');
        const telValue = telInput.value.trim();

        if (!telValue) {
            showError(telInput, 'Введите номер телефона');
            isValid = false;
        } else if (!isValidPhone(telValue)) {
            showError(telInput, 'Введите корректный номер');
            isValid = false;
        }

        const emailInput = form.querySelector('.form__input--email');
        const emailValue = emailInput.value.trim();

        if (!emailValue) {
            showError(emailInput, 'Введите email');
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            showError(emailInput, 'Введите корректный email');
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        }
    });
}
function isValidPhone(phone) {
    // Разрешает: +7, 8, 7 + пробелы, скобки, дефисы
    const regex = /^(\+7|7|8)?[\s\(]*\d{3}[\s\)]*\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
    return regex.test(phone);
}

function isValidName(name) {
    const nameRegex = /^[а-яА-ЯёЁ\s-]+$/iu;
    return nameRegex.test(name.trim());
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(input) {
    input.classList.add('form__input--error');

    const removeErrorOnInput = () => {
        input.classList.remove('form__input--error');
        input.removeEventListener('input', removeErrorOnInput);
    };

    input.addEventListener('input', removeErrorOnInput, { once: true });
}

function clearErrorForInput(input) {
    input.classList.remove('form__input--error');
}

function clearErrors() {
    document.querySelectorAll('.form__input').forEach(input => {
        clearErrorForInput(input);
    });
}