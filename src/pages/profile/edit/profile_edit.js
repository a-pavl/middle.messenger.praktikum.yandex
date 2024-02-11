import arrowbackImg from '../../../../static/arrow-back.svg';
import defaultAvatarImg from '../../../../static/default_avatar.svg';
import './profile_edit.scss';

function redirectToProfilePage(event) {
    event.preventDefault();
    location.href = '../profile.html';
}

document.getElementById('backButton').addEventListener('click', redirectToProfilePage);
document.getElementById('confirmButton').addEventListener('click', redirectToProfilePage);

document.getElementById('backButton').src = arrowbackImg;
document.getElementById('avatarImg').src = defaultAvatarImg;
