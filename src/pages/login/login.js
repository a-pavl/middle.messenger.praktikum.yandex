import './login.scss';

// temporarily mock form submittion
function submitForm(event) {
    event.preventDefault();
}

function redirectToSignInPage(event) {
    event.preventDefault();
    location.href = '../signin/signin.html';
}

document.getElementById('confirmButton').addEventListener('click', submitForm);
document.getElementById('redirectButton').addEventListener('click', redirectToSignInPage);
