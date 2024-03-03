import { Block } from '../../lib';
import { InputField } from '../inputField';
import { IMessageInput } from './types';
import { IContextMenuItem } from '../contextMenuItem/types';
import { messageValidation } from '../../lib/Validation';

import arrowForwardImg from '../../assets/arrow_forward.svg';
import clipImg from '../../assets/clip.svg';
import fileImg from '../../assets/file.svg';
import locationImg from '../../assets/location.svg';
import mediaImg from '../../assets/media.svg';

import messageInput from './messageInput.hbs?raw';

export class MessageInput extends Block {
  constructor() {
    const messageAttachmentsItems: Array<IContextMenuItem> = [
      { icon: mediaImg, text: 'Фото или Видео', onClick: () => this.showAttachFileModal() },
      { icon: fileImg, text: 'Файл', onClick: () => this.showAttachFileModal() },
      { icon: locationImg, text: 'Локация', onClick: () => this.showAttachFileModal() },
    ];

    const props: IMessageInput = {
      icon: arrowForwardImg,
      validationRules: {
        message: messageValidation,
      },
      messageAttachments: {
        className: 'contextMenu__list-messageAttachments',
        icon: clipImg,
        items: messageAttachmentsItems,
      },
      onSend: () => this.sendMessage(),
    };

    super(props);
  }

  showAttachFileModal() {
    console.log('showAttachFileModal');
  }

  sendMessage() {
    const messageComponent = this.getRefs().message as InputField;
    const validationMessage = messageComponent.validationResult();
    const message = messageComponent.value();

    if (validationMessage) {
      console.log({ validationMessage });
    }

    // mock form submit
    console.log({ message });

    messageComponent.clearInput();
  }

  render() {
    return messageInput;
  }
}
