import { Block } from '../../lib';
import { IModalProps } from './types';
import modalTemplate from './modal.hbs?raw';

export class Modal extends Block {
  constructor(props: IModalProps) {
    super({
      ...props,
      events: {
        click: props.onClick || (() => {}),
      },
    });
  }

  get props() {
    return this._props as IModalProps;
  }

  render() {
    return modalTemplate;
  }
}
