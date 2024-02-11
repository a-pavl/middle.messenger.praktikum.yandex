import arrowbackImg from '../../../static/arrow-back.svg';
import defaultAvatarImg from '../../../static/default_avatar.svg';
import './profile.scss';

function redirectToMainPage(event) {
    event.preventDefault();
    location.href = '../../index.html';
}

function redirectToLoginPage(event) {
    event.preventDefault();
    location.href = '../login/login.html';
}

function redirectToProfileEditData(event) {
    event.preventDefault();
    location.href = './edit/data.html';
}

function redirectToProfileEditPassword(event) {
    event.preventDefault();
    location.href = './edit/password.html';
}

document.getElementById('backButton').addEventListener('click', redirectToMainPage);
document.getElementById('logoutButton').addEventListener('click', redirectToLoginPage);
document.getElementById('editDetailsButton').addEventListener('click', redirectToProfileEditData);
document.getElementById('editPasswordButton').addEventListener('click', redirectToProfileEditPassword);

document.getElementById('backButton').src = arrowbackImg;
document.getElementById('avatarImg').src = defaultAvatarImg;
