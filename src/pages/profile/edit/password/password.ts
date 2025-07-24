import { Block, connectToStore } from '@/lib';
import { InputField } from '@/components/inputField';
import { IProfileEditPasswordPageProps } from './types';
import { passwordValidation } from '@/lib/Validation';

import passwordTemplate from './password.hbs?raw';

import arrowbackImg from '@/assets/arrow_back.svg';
import { Routes } from '@/types';
import { TChangePasswordInput } from '@/api/user/types';
import { updatePassword } from '@/services/user';

class ProfileEditPassword extends Block {
  constructor() {
    const props: IProfileEditPasswordPageProps = {
      redirectBackIcon: arrowbackImg,

      user: window.store.getState().user,

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

        const data = {
          oldPassword,
          newPassword,
        } as TChangePasswordInput;

        if (oldPassword && newPassword && newPasswordCheck) {
          updatePassword(data)
            .then(() => {
              window.router.go(Routes.Profile);
            })
            .catch((error) => {
              console.error('change password:', error)
            });
        }
      },
    };

    super(props);
  }

  render() {
    return passwordTemplate;
  }
}

const ProfileEditPasswordCmp = connectToStore(({ user }) => ({ user }))(ProfileEditPassword);
export { ProfileEditPasswordCmp };
