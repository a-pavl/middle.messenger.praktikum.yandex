import { Block } from '../../lib';
import { IChatCardList } from './types';

import chatCardListTemplate from './chatCardList.hbs?raw';

export class ChatCardList extends Block {
  constructor(props: IChatCardList) {
    super(props);
  }

  public get props() {
    return this._props as IChatCardList;
  }

  render() {
    return chatCardListTemplate;
  }
}
