import { IProps } from '../../types';
import { IChatCard } from '../chatCard/types';

export interface IChatCardList extends IProps {
  chatList: Array<IChatCard>,
}
