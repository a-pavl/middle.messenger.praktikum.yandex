import { TChat } from '@/types/chat';
import { IProps } from '../../types';

export interface IChatCardList extends IProps {
  chatList: Array<TChat>,
}
