import { Block } from '../../lib';
import { IMesssageProps } from './types';

import message from './message.hbs?raw';

export class Message extends Block {
  constructor(props: IMesssageProps) {
    super(props);
  }

  render() {
    return message;
  }
}
