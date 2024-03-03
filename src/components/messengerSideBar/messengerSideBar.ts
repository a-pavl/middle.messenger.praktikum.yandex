import { Block, navigation } from '../../lib';
import { ChatSearch } from '../chatSearch';
import { ChatCardList } from '../chatCardList';
import { IMessengerSideBar } from './types';
import { IChatCard } from '../chatCard/types';

import messengerSideBar from './messengerSideBar.hbs?raw';

export class MessengerSideBar extends Block {
  constructor(props: IMessengerSideBar) {
    props.onRedirectToProfile = () => {
      navigation('profile');
    };
    props.onInput = () => this.searchChats();

    super(props);
  }

  public get props() {
    return this._props as IMessengerSideBar;
  }

  searchChats() {
    const searchString = (this.getRefs().search as ChatSearch).value();
    const filteredChatList = this.props.chatList.filter((chatCard: IChatCard) => chatCard.chat.name.includes(searchString));

    // update list of chat cards
    const chatCardListCmp = this.getRefs().chatCardList as ChatCardList;
    const chatCardListProps = chatCardListCmp.props;
    chatCardListProps.chatList = filteredChatList;
    chatCardListCmp.setProps(chatCardListProps);
  }

  render() {
    return messengerSideBar;
  }
}
