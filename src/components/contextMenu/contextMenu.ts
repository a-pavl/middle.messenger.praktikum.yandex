import { Block } from '../../lib';
import { IContextMenu } from './types';

import contextMenu from './contextMenu.hbs?raw';

export class ContextMenu extends Block {
  constructor(props: IContextMenu) {
    super(props);
  }

  render() {
    return contextMenu;
  }
}
