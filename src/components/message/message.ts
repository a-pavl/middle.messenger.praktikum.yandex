import { Block } from '../../lib';
import { IMesssageProps } from './types';

import messageTemplate from './message.hbs?raw';
import { convertDatetimeToTime } from '@/utils';

export class Message extends Block {
  constructor(props: IMesssageProps) {
    const state = window.store.getState();

    props.message.timeFormatted = convertDatetimeToTime(props.message.time);
    props.message.is_author_message = (props.message.user_id === state.user?.id);
    
    super(props);
  }

  render() {
    return messageTemplate;
  }
}
