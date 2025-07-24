import { Block } from '../../../lib';
import { IErrorPageProps } from '../types';

import errorTemplate from '../error.hbs?raw';
import { Routes } from '../../../types';

export class BadRequest extends Block {
  constructor() {
    const props: IErrorPageProps = {
      error: {
        code: 500,
        text: 'Мы уже фиксим',
      },
      onRedirect: () => {
        window.router.go(Routes.Messenger);
      },
    };

    super(props);
  }

  render() {
    return errorTemplate;
  }
}
