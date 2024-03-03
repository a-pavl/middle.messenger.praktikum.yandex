import { Block, navigation } from '../../../../lib';
import { InputField } from '../../../../components/inputField';
import { IProfileEditDataPageProps } from './types';
import {
  emailValidation, loginValidation, nameValidation, phoneValidation,
} from '../../../../lib/Validation';

import arrowbackImg from '../../../../assets/arrow_back.svg';
import defaultAvatarImg from '../../../../assets/default_avatar.svg';

import userData from './userData.hbs?raw';

export class ProfileEditData extends Block {
  constructor() {
    const props: IProfileEditDataPageProps = {
      redirectBackIcon: arrowbackImg,

      avatar: defaultAvatarImg,
      email: 'pochta@yandex.ru',
      login: 'ivanivanov',
      firstName: 'Иван',
      secondName: 'Иванов',
      displayName: 'Иван',
      phone: '+79099673030',

      validationRules: {
        email: emailValidation,
        login: loginValidation,
        name: nameValidation,
        phone: phoneValidation,
      },
      onRedirect: () => {
        navigation('profile');
      },
      onSubmit: (event) => {
        event.preventDefault();

        const email = (this.getRefs().email as InputField).value();
        const login = (this.getRefs().login as InputField).value();
        const first_name = (this.getRefs().first_name as InputField).value();
        const second_name = (this.getRefs().second_name as InputField).value();
        const display_name = (this.getRefs().display_name as InputField).value();
        const phone = (this.getRefs().phone as InputField).value();

        // mock form submit
        console.log({
          email, login, first_name, second_name, display_name, phone,
        });

        if (email && login && first_name && second_name && display_name && phone) {
          navigation('profile');
        }
      },
    };

    super(props);
  }

  render() {
    return userData;
  }
}
