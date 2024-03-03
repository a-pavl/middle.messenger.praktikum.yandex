import { Block } from '../../lib';
import { IContextMenuItem } from './types';

import contextMenuItem from './contextMenuItem.hbs?raw';

export class ContextMenuItem extends Block {
  constructor(props: IContextMenuItem) {
    super({
      ...props,
      events: {
        click: props.onClick || (() => {}),
      },
    });
  }

  render() {
    return contextMenuItem;
  }
}
