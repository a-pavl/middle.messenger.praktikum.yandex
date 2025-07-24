import { StoreEvents } from '@/lib/Store/store';
import { Block } from '../../lib';
import { IMessengerPageProps } from './types';

import defaultAvatarImg from '@/assets/default_avatar.svg';
import messengerTemplate from './messenger.hbs?raw';

export class Messenger extends Block {
  constructor() {
    window.store.on(StoreEvents.Updated, () => this.onCurrentChatUpdated());

    super();
  }

  get props() {
    return this._props as IMessengerPageProps;
  }

  private onCurrentChatUpdated() {
    const state = window.store.getState();
    if (!state) return;

    const currentChatId = state.currentChatId;

    if (currentChatId && this.props.selectedChatId !== currentChatId) {
      const chat = state.chats!.find((chat) => chat.id === currentChatId );
      if (chat && !chat.avatar) {
        chat.avatar = defaultAvatarImg;
      }

      this.getRefs().chatWindow.setProps({chat: state.chats!.find((chat) => chat.id === currentChatId )});
    }
}

  render() {
    return messengerTemplate;
  }
}
