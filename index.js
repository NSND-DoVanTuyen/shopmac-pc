document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.querySelector('.login form');
    const emailInput = loginForm.querySelector('input[type="email"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    const loginButton = loginForm.querySelector('.btn');

    const correctEmail = 'cherry@email.com';
    const correctPassword = 'cherrycherry123';
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        if(emailInput.value === correctEmail && passwordInput.value === correctPassword) {
            window.location.href = 'home.html';
        } else {
            alert('Email hoặc mật khẩu không đúng. Vui lòng thử lại.');
        }
    });
});
