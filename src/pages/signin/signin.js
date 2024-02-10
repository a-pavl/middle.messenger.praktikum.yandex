import './signin.scss';

// temporarily mock form submittion
function submitForm(event) {
    event.preventDefault();
}

function redirectToLoginPage(event) {
    event.preventDefault();
    location.href = '../login/login.html';
}

document.getElementById('confirmButton').addEventListener('click', submitForm);
document.getElementById('redirectButton').addEventListener('click', redirectToLoginPage);