import { Block } from '../../lib';
import { IChatCard } from './types';

import chatCardTemplate from './chatCard.hbs?raw';
import defaultAvatarImg from '@/assets/default_avatar.svg';
import { convertDatetimeToTime } from '@/utils';

export class ChatCard extends Block {
  constructor(props: IChatCard) {
    if (!props.chat.avatar) {
      props.chat.avatar = defaultAvatarImg;
    }

    if (props.chat.last_message) {
      props.chat!.last_message!.timeFormatted = convertDatetimeToTime(props.chat!.last_message.time);
    }
    props.showChatCounter = (props.chat.unread_count > 0);
    console.log(props.chat);

    super({
      ...props,
      events: {
        click: () => {
          const { chat } = props;
          window.store.set({ 
            currentChatId: chat.id,
          });
        },
      },
    });
  }

  render() {
    return chatCardTemplate;
  }
}
