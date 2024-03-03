import { Block, navigation } from '../../../../lib';
import { InputField } from '../../../../components/inputField';
import { IProfileEditPasswordPageProps } from './types';
import { passwordValidation } from '../../../../lib/Validation';

import password from './password.hbs?raw';

import arrowbackImg from '../../../../assets/arrow_back.svg';
import defaultAvatarImg from '../../../../assets/default_avatar.svg';

export class ProfileEditPassword extends Block {
  constructor() {
    const props: IProfileEditPasswordPageProps = {
      redirectBackIcon: arrowbackImg,
      avatar: defaultAvatarImg,
      validationRules: {
        password: passwordValidation,
      },
      onRedirect: () => {
        navigation('profile');
      },
      onSubmit: (event) => {
        event.preventDefault();

        const oldPassword = (this.getRefs().oldPassword as InputField).value();
        const newPassword = (this.getRefs().newPassword as InputField).value();
        const newPasswordCheck = (this.getRefs().newPasswordCheck as InputField).value();

        // mock form submit
        console.log({ oldPassword, newPassword, newPasswordCheck });

        if (oldPassword && newPassword && newPasswordCheck) {
          navigation('profile');
        }
      },
    };

    super(props);
  }

  render() {
    return password;
  }
}
