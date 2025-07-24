import { Block } from '../../lib';
import { ChatSearch } from '../chatSearch';
import { ChatCardList } from '../chatCardList';
import { IMessengerSideBar } from './types';

import messengerSideBarTemplate from './messengerSideBar.hbs?raw';
import { Routes } from '../../types';
import { connectToStore } from '@/lib';

import addChatImg from '../../assets/add_chat.svg';
import { createChat, getChats } from '@/services/chat';
import { TChat } from '@/types/chat';

class MessengerSideBar extends Block {
  constructor(props: IMessengerSideBar) {
    props.createChatIcon = addChatImg;
    
    props.onAddChat = () => this.switchModalVisibility(true, 'addChat');
    props.onRedirectToProfile = () => {
      window.router.go(Routes.Profile);
    };
    props.onInput = () => this.searchChats();

    props.modalConfigs = {
      addChat: {
        content: 'AddChatContent',
        showModal: false,
        onClose: (event) => this.closeModal(event, 'addChat'),
        onSubmit: (event) => this.addChat(event),
      },
    };

    super(props);
  }

  public get props() {
    return this._props as IMessengerSideBar;
  }

  searchChats() {
    const searchString = (this.getRefs().search as ChatSearch).value();
    const filteredChatList = this.props.chats.filter((chatCard: TChat) => chatCard.title.includes(searchString));

    const chatCardListCmp = this.getRefs().chatCardList as ChatCardList;
    const chatCardListProps = chatCardListCmp.props;
    chatCardListProps.chatList = filteredChatList;
    chatCardListCmp.setProps(chatCardListProps);
  }

  addChat(event: Event) {
    event.preventDefault()
    const title = (this.getRefs().addChat.getRefs().input.element as HTMLInputElement).value.trim();

    if (title !== null) {
      createChat(title)
        .then(() => {
          getChats({});
        })
        .catch((error) => {
          console.error('create chat:', error);
        });

      this.switchModalVisibility(false, 'addChat');
    }
  }

  closeModal(event: Event, modalName: string) {
    event.preventDefault();

    const targetElement = (event.target as HTMLElement);

    if (targetElement.className !== 'overlay') {
      return;
    }

    this.switchModalVisibility(false, modalName);
  }

  switchModalVisibility(showModal: boolean, modalName: string) {
    const propsToSet = { ...this.props };
    propsToSet.modalConfigs[modalName].showModal = showModal;
    this.setProps(propsToSet);
  }

  render() {
    return messengerSideBarTemplate;
  }
}

const MessengerSideBarCmp = connectToStore(({ chats }) => ({ chats }))(MessengerSideBar);
export { MessengerSideBarCmp };
