import { Block } from '../../lib';
import { IChatCard } from './types';

import chatCard from './chatCard.hbs?raw';

export class ChatCard extends Block {
  constructor(props: IChatCard) {
    super(props);
  }

  render() {
    return chatCard;
  }
}
