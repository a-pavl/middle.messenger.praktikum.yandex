import { Block, connectToStore } from '../../lib';
import { IProfilePageProps } from './types';

import profileTemplate from './profile.hbs?raw';

import arrowbackImg from '../../assets/arrow_back.svg';
import defaultAvatarImg from '@/assets/default_avatar.svg';

import { Routes } from '../../types';
import { logout } from '@/services/auth';
import { RESOURCES_HOST } from '@/config/auth';

class Profile extends Block {
  constructor() {
    const props: IProfilePageProps = {
      redirectBackIcon: arrowbackImg,

      user: window.store.getState().user,
      
      onLogout: () => {
        logout()
          .then(() => {
            window.router.go(Routes.Login);
          })
          .catch((error) => console.error('logout:', error));
      },
      onRedirectToMainPage: () => {
        window.router.go(Routes.Messenger);
      },
      onRedirectToProfileEditData: () => {
        window.router.go(Routes.ProfileData);
      },
      onRedirectToProfileEditPassword: () => {
        window.router.go(Routes.ProfilePassword);
      },
    };

    if (props.user) {
      if (!props.user.avatar) {
        props.user.avatar = defaultAvatarImg;
      } else {
        props.user.avatar = `${RESOURCES_HOST}${props.user.avatar}`;
      }
    }

    super(props);
  }

  render() {
    return profileTemplate;
  }
}

const ProfileCmp = connectToStore(({ user }) => ({ user }))(Profile);
export { ProfileCmp };
