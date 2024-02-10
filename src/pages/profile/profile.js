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

document.getElementById('backButton').addEventListener('click', redirectToMainPage);
document.getElementById('logoutButton').addEventListener('click', redirectToLoginPage);

document.getElementById('backButton').src = arrowbackImg;
document.getElementById('avatarImg').src = defaultAvatarImg;