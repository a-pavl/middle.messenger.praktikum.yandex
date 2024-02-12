import './error.scss';

function redirectToMainPage() {
    location.href = '../../index.html';
}

document.getElementById('redirectButton').addEventListener('click', redirectToMainPage);
