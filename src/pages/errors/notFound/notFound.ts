import { Block } from '../../../lib';
import { IErrorPageProps } from '../types';

import notFound from '../error.hbs?raw';
import { Routes } from '../../../types';

export class NotFound extends Block {
  constructor() {
    const props: IErrorPageProps = {
      error: {
        code: 404,
        text: 'Не туда попали',
      },
      onRedirect: () => {
        window.router.go(Routes.Messenger);
      },
    };

    super(props);
  }

  render() {
    return notFound;
  }
}
