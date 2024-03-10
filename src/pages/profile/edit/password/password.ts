import { Block } from '../../../../lib';
import { InputField } from '../../../../components/inputField';
import { IProfileEditPasswordPageProps } from './types';
import { passwordValidation } from '../../../../lib/Validation';

import password from './password.hbs?raw';

import arrowbackImg from '../../../../assets/arrow_back.svg';
import defaultAvatarImg from '../../../../assets/default_avatar.svg';
import { Routes } from '../../../../types';

export class ProfileEditPassword extends Block {
  constructor() {
    const props: IProfileEditPasswordPageProps = {
      redirectBackIcon: arrowbackImg,
      avatar: defaultAvatarImg,
      validationRules: {
        password: passwordValidation,
      },
      onRedirect: () => {
        window.router.go(Routes.Profile);
      },
      onSubmit: (event) => {
        event.preventDefault();

        const oldPassword = (this.getRefs().oldPassword as InputField).value();
        const newPassword = (this.getRefs().newPassword as InputField).value();
        const newPasswordCheck = (this.getRefs().newPasswordCheck as InputField).value();

        // mock form submit
        console.log({ oldPassword, newPassword, newPasswordCheck });

        if (oldPassword && newPassword && newPasswordCheck) {
          window.router.go(Routes.Profile);
        }
      },
    };

    super(props);
  }

  render() {
    return password;
  }
}
