import { Block } from '../../lib';
import { IMessengerPageProps } from './types';

import messenger from './messenger.hbs?raw';

import { chatList, msgList, chat } from '../../scripts/pageData';

export class Messenger extends Block {
  constructor() {
    const props: IMessengerPageProps = {
      chatList,
      selectedChat: chat,
      messageList: msgList,
    };

    super(props);
  }

  render() {
    return messenger;
  }
}
