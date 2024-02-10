import './signin.scss';

function redirectToLoginPage(event) {
    event.preventDefault();
    location.href = '../login/login.html';
}

document.getElementById('redirectButton').addEventListener('click', redirectToLoginPage);