import { Block, connectToStore } from '../../lib';
import { IChatWindow } from './types';
import { IContextMenuItem } from '../contextMenuItem/types';

import ellipsisImg from '../../assets/ellipsis.svg';
import addUserImg from '../../assets/add_user.svg';
import deleteUserImg from '../../assets/delete_user.svg';
import defaultAvatarImg from '@/assets/default_avatar.svg';

import chatWindowTemplate from './chatWindow.hbs?raw';
import { searchUserByLogin } from '@/services/user';
import { addUserToChat, deleteUsersFromChat, updateChatAvatar } from '@/services/chat';
import { TAddDeleteUserInput } from '@/api/chat/types';
import { RESOURCES_HOST } from '@/config/auth';

class ChatWindow extends Block {
  constructor(props: IChatWindow) {
    if (props.chat) {
      if (!props.chat.avatar) {
        props.chat.avatar = defaultAvatarImg;
      } else {
        props.chat.avatar = `${RESOURCES_HOST}${props.chat.avatar}`;
      }
    }

    props.onChatIconClick = (event) => {
      event.preventDefault();
      this.switchModalVisibility(true, 'editChatIcon');
    }
    
    const userSettingsItems: Array<IContextMenuItem> = [
      { icon: addUserImg, text: 'Добавить пользователя', onClick: () => this.switchModalVisibility(true, 'addUser') },
      { icon: deleteUserImg, text: 'Удалить пользователя', onClick: () => this.switchModalVisibility(true, 'deleteUser') },
    ];

    props.userSettings = {
      className: 'context-menu__list-userSettings',
      icon: ellipsisImg,
      items: userSettingsItems,
    };

    props.modalConfigs = {
      addUser: {
        content: 'AddUserContent',
        showModal: false,
        onClose: (event) => this.closeModal(event, 'addUser'),
        onSubmit: (event) => this.addUser(event),
      },
      deleteUser: {
        content: 'DeleteUserContent',
        showModal: false,
        onClose: (event) => this.closeModal(event, 'deleteUser'),
        onSubmit: (event) => this.deleteUser(event),
      },
      editChatIcon: {
        content: 'FileInputContent',
        showModal: false,
        onClose: (event) => this.closeModal(event, 'editChatIcon'),
        onSubmit: (event) => this.editChatIcon(event),
      },
    };

    super(props);
  }

  get props() {
    return this._props as IChatWindow;
  }

  addUser(event: Event) {
    event.preventDefault();

    const login = (this.getRefs().addUser.getRefs().input.element as HTMLInputElement).value.trim();
    const currentChatId = window.store.getState().currentChatId;

    searchUserByLogin(login)
      .then(users => {
        addUserToChat({
          users: users.map((u) => u.id),
          chatId: currentChatId
        } as TAddDeleteUserInput)
          .then(() => this.switchModalVisibility(false, 'addUser'))
          .catch((error) => {
              console.error('add users to chat:', error)
          });
      })
      .catch((error) => {
        console.error('search users:', error)
    });
  }

  deleteUser(event: Event) {
    event.preventDefault();

    const login = (this.getRefs().addUser.getRefs().input.element as HTMLInputElement).value.trim();
    const currentChatId = window.store.getState().currentChatId;

    searchUserByLogin(login)
      .then(users => {
        deleteUsersFromChat({
          users: users.map((u) => u.id),
          chatId: currentChatId
        } as TAddDeleteUserInput)
          .then(() => this.switchModalVisibility(false, 'deleteUser'))
          .catch((error) => {
            console.error('remove users from chat:', error);
          });
      })
      .catch((error) => {
        console.error('search users:', error)
    });
  }

  editChatIcon(event: Event) {
    event.preventDefault();

    const currentChatId = window.store.getState().currentChatId;
    if (!currentChatId) return;

    const data = new FormData();
    const chatIconFile = (this.getRefs().editChatIcon.getRefs().fileInput.element as HTMLInputElement).files![0];
    data.append("chatIcon", chatIconFile);

    updateChatAvatar(data, currentChatId)
      .then(() => console.log('chat icon updated'))
      .catch((error) => console.error('change chat icon:', error));
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
    return chatWindowTemplate;
  }
}

const ChatWindowCmp = connectToStore(({ chats }) => ({ chats }))(ChatWindow);
export { ChatWindowCmp };
