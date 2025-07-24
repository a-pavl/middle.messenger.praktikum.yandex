import { Block } from '../../lib';
import { InputField } from '../../components/inputField';
import { ISignUpPageProps } from './types';
import {
  emailValidation, loginValidation, nameValidation, phoneValidation, passwordValidation,
} from '../../lib/Validation';

import signupTemplate from './signup.hbs?raw';
import { Routes } from '../../types';
import { TUser } from '@/types/user';
import { signup } from '@/services/auth';

export class Signup extends Block {
  constructor() {
    const props: ISignUpPageProps = {
      validationRules: {
        email: emailValidation,
        login: loginValidation,
        name: nameValidation,
        phone: phoneValidation,
        password: passwordValidation,
      },
      onRedirect: () => {
        window.router.go(Routes.Login);
      },
      onSubmit: (event) => {
        event.preventDefault();

        const email = (this.getRefs().email as InputField).value();
        const login = (this.getRefs().login as InputField).value();
        const first_name = (this.getRefs().first_name as InputField).value();
        const second_name = (this.getRefs().second_name as InputField).value();
        const phone = (this.getRefs().phone as InputField).value();
        const password = (this.getRefs().password as InputField).value();
        const password_check = (this.getRefs().password_check as InputField).value();

        if (email && login && first_name && second_name && phone && password && password_check) {
          const user: TUser = {email, login, first_name, second_name, phone, password};
          
          signup(user)
            .then(() => {
              window.router.go(Routes.Messenger)
            })
            .catch((error: Error) => {
              console.error('signup:', error)
            });
        }
      },
    };

    super(props);
  }

  render() {
    return signupTemplate;
  }
}
