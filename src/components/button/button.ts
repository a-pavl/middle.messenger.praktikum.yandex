import { Block } from '../../lib';
import { IButtonProps } from './types';

import button from './button.hbs?raw';

export class Button extends Block {
  constructor(props: IButtonProps) {
    super({
      ...props,
      events: {
        click: props.onClick || (() => {}),
      },
    });
  }

  render() {
    return button;
  }
}
