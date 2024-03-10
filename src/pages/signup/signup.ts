import { Block } from '../../lib';
import { InputField } from '../../components/inputField';
import { ISignUpPageProps } from './types';
import {
  emailValidation, loginValidation, nameValidation, phoneValidation, passwordValidation,
} from '../../lib/Validation';

import signup from './signup.hbs?raw';
import { Routes } from '../../types';

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

        // mock form submit
        console.log({
          email, login, first_name, second_name, phone, password, password_check,
        });

        if (email && login && first_name && second_name && phone && password && password_check) {
          window.router.go(Routes.Messenger);
        }
      },
    };

    super(props);
  }

  render() {
    return signup;
  }
}
