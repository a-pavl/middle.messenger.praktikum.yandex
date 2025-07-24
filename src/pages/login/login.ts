import { Block } from '../../lib';
import { ILoginPageProps } from './types';
import { loginValidation, passwordValidation } from '../../lib/Validation';
import { InputField } from '../../components/inputField';

import loginTemplate from './login.hbs?raw';
import { Routes } from '../../types';
import { signin } from '@/services/auth';
import { TSignInInput } from '@/api/auth/types';

export class Login extends Block {
  constructor() {
    const props: ILoginPageProps = {
      validationRules: {
        login: loginValidation,
        password: passwordValidation,
      },
      onRedirect: () => {
        window.router.go(Routes.SignUp);
      },
      onSubmit: (event) => {
        event.preventDefault();

        const login = (this.getRefs().login as InputField).value();
        const password = (this.getRefs().password as InputField).value();

        if (login && password) {
          const credentials: TSignInInput = {login, password};

          signin(credentials)
            .then(() => {
              window.router.go(Routes.Messenger);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      },
    };

    super(props);
  }

  render() {
    return loginTemplate;
  }
}
