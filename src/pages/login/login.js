import './login.scss';

function redirectToSignInPage(event) {
    event.preventDefault();
    location.href = '../signin/signin.html';
}

document.getElementById('redirectButton').addEventListener('click', redirectToSignInPage);