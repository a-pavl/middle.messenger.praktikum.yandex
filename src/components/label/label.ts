import { Block } from '../../lib/Block';
import { ILabelProps } from './types';

import labelTemplate from './label.hbs?raw';

export class Label extends Block {
  constructor(props: ILabelProps) {
    const events = {
      click: props.onClick || (() => {}),
    };

    super({
      ...props,
      events,
    });
  }

  render() {
    return labelTemplate;
  }
}
