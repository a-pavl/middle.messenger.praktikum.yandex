import { Block } from '../../lib/Block';
import { IErrorProps } from './types';

import errorTemplate from './error.hbs?raw';

export class Error extends Block {
  constructor(props: IErrorProps) {
    super(props);
  }

  render() {
    return errorTemplate;
  }
}
