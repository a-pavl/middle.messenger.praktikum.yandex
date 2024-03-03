import { Block, navigation } from '../../lib';
import { ILoginPageProps } from './types';
import { loginValidation, passwordValidation } from '../../lib/Validation';
import { InputField } from '../../components/inputField';

import login from './login.hbs?raw';

export class Login extends Block {
  constructor() {
    const props: ILoginPageProps = {
      validationRules: {
        login: loginValidation,
        password: passwordValidation,
      },
      onRedirect: () => {
        navigation('signup');
      },
      onSubmit: (event) => {
        event.preventDefault();

        const login = (this.getRefs().login as InputField).value();
        const password = (this.getRefs().password as InputField).value();

        // mock form submit
        console.log({ login, password });

        if (login && password) {
          navigation('messenger');
        }
      },
    };

    super(props);
  }

  render() {
    return login;
  }
}
