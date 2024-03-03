import { Block } from '../../lib';
import { IChatWindow } from './types';
import { IContextMenuItem } from '../contextMenuItem/types';

import ellipsisImg from '../../assets/ellipsis.svg';
import addUserImg from '../../assets/add_user.svg';
import deleteUserImg from '../../assets/delete_user.svg';

import chatWindow from './chatWindow.hbs?raw';

export class ChatWindow extends Block {
  constructor(props: IChatWindow) {
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
    };

    super(props);
  }

  get props() {
    return this._props as IChatWindow;
  }

  addUser(event: Event) {
    event.preventDefault();

    const inputValue = (this.getRefs().addUser.getRefs().input.element as HTMLInputElement).value.trim();
    console.log(`user ${inputValue} added`);

    this.switchModalVisibility(false, 'addUser');
  }

  deleteUser(event: Event) {
    event.preventDefault();

    const inputValue = (this.getRefs().deleteUser.getRefs().input.element as HTMLInputElement).value.trim();
    console.log(`user ${inputValue} deleted`);

    this.switchModalVisibility(false, 'deleteUser');
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
    return chatWindow;
  }
}
