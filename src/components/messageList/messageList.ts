import { Block } from '../../lib';
import { IMesssageListProps } from './types';

import messageList from './messageList.hbs?raw';

export class MessageList extends Block {
  constructor(props: IMesssageListProps) {
    super(props);
  }

  render() {
    return messageList;
  }
}
