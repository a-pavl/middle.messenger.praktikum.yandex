import { Block } from '../../lib';
import { IChatSearch } from './types';

import chatSearch from './chatSearch.hbs?raw';

export class ChatSearch extends Block {
  constructor(props: IChatSearch) {
    super(props);
  }

  value() {
    return (this.getRefs().input.element as HTMLInputElement).value;
  }

  render() {
    return chatSearch;
  }
}
