import { Block } from '../../lib/Block';
import { IErrorProps } from './types';

import error from './error.hbs?raw';

export class Error extends Block {
  constructor(props: IErrorProps) {
    super(props);
  }

  render() {
    return error;
  }
}
