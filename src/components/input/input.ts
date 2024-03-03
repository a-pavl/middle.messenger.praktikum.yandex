import { Block } from '../../lib/Block';
import { IInputProps } from './types';

import input from './input.hbs?raw';

export class Input extends Block {
  constructor(props: IInputProps) {
    const events = {
      blur: props.onBlur || (() => {}),
      click: props.onClick || (() => {}),
      input: props.onInput || (() => {}),
    };

    super({
      ...props,
      events,
    });
  }

  get props() {
    return this._props as IInputProps;
  }

  render() {
    return input;
  }
}
