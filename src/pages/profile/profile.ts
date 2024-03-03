import { Block, navigation } from '../../lib';
import { IProfilePageProps } from './types';

import profile from './profile.hbs?raw';

import arrowbackImg from '../../assets/arrow_back.svg';
import defaultAvatarImg from '../../assets/default_avatar.svg';

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
        navigation('messenger');
      },
      onRedirectToLoginPage: () => {
        navigation('login');
      },
      onRedirectToProfileEditData: () => {
        navigation('profileEditData');
      },
      onRedirectToProfileEditPassword: () => {
        navigation('profileEditPassword');
      },
    };

    super(props);
  }

  render() {
    return profile;
  }
}
