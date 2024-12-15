document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const resetError = (id) => {
        const element = document.getElementById(id);
        if (element) element.innerText = '';
    };
    resetError('fullNameError');
    resetError('phoneError');
    resetError('loginError');
    resetError('emailError');
    resetError('passwordError');
    resetError('successMessage');
    const getInputValue = (id) => {
        const input = document.getElementById(id);
        return input ? input.value.trim() : '';
    };
    const fullName = getInputValue('fullName');
    const phone = getInputValue('phone');
    const login = getInputValue('login');
    const email = getInputValue('email');
    const password = getInputValue('password');
    let valid = true;
    const fullNamePattern = /^[А-Яа-я\s]+$/;
    if (fullName && (!fullNamePattern.test(fullName) || fullName.split(/\s+/).length < 3)) {
        const fullNameError = document.getElementById('fullNameError');
        if (fullNameError) {
            fullNameError.innerText = 'ФИО должно содержать только буквы и пробелы.';
        }
        valid = false;
    }
    const phonePattern = /^\+?[0-9]{11,11}$/;
    if (phone && !phonePattern.test(phone)) {
        const phoneError = document.getElementById('phoneError');
        if (phoneError) {
            phoneError.innerText = 'Введите корректный номер телефона.';
        }
        valid = false;
    }
    if (login && login.length < 3) {
        const loginError = document.getElementById('loginError');
        if (loginError) {
            loginError.innerText = 'Логин должен содержать не менее 3 символов.';
        }
        valid = false;
    }
    if (password && password.length < 6) {
        const passwordError = document.getElementById('passwordError');
        if (passwordError) {
            passwordError.innerText = 'Пароль должен содержать не менее 6 символов.';
        }
        valid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
        const emailError = document.getElementById('emailError');
        if (emailError) {
            emailError.innerText = 'Введите корректный email.';
        }
        valid = false;
    }
    if (valid) {
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.innerText = 'База данных не подключена!';
        }
        document.getElementById('Form').reset();
    }
});