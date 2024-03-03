import { Block, navigation } from '../../../lib';
import { IErrorPageProps } from '../types';

import notFound from '../error.hbs?raw';

export class NotFound extends Block {
  constructor() {
    const props: IErrorPageProps = {
      error: {
        code: 404,
        text: 'Не туда попали',
      },
      onRedirect: () => {
        navigation('badRequest');
      },
    };

    super(props);
  }

  render() {
    return notFound;
  }
}
