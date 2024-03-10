import { Block } from '../../lib';
import { IProfilePageProps } from './types';

import profile from './profile.hbs?raw';

import arrowbackImg from '../../assets/arrow_back.svg';
import defaultAvatarImg from '../../assets/default_avatar.svg';
import { Routes } from '../../types';

export class Profile extends Block {
  constructor() {
    const props: IProfilePageProps = {
      redirectBackIcon: arrowbackImg,
      avatar: defaultAvatarImg,
      email: 'pochta@yandex.ru',
      login: 'ivanivanov',
      firstName: 'Иван',
      secondName: 'Иванов',
      displayName: 'Иван',
      phone: '+79099673030',
      onRedirectToMainPage: () => {
        window.router.go(Routes.Messenger);
      },
      onRedirectToLoginPage: () => {
        window.router.go(Routes.Login);
      },
      onRedirectToProfileEditData: () => {
        window.router.go(Routes.ProfileData);
      },
      onRedirectToProfileEditPassword: () => {
        window.router.go(Routes.ProfilePassword);
      },
    };

    super(props);
  }

  render() {
    return profile;
  }
}
