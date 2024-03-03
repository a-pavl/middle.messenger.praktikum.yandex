import { Block, navigation } from '../../../lib';
import { IErrorPageProps } from '../types';

import badRequest from '../error.hbs?raw';

export class BadRequest extends Block {
  constructor() {
    const props: IErrorPageProps = {
      error: {
        code: 500,
        text: 'Мы уже фиксим',
      },
      onRedirect: () => {
        navigation('notFound');
      },
    };

    super(props);
  }

  render() {
    return badRequest;
  }
}
