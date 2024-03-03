import { IProps } from '../../types';
import { IChatCard } from '../chatCard/types';

export interface IMessengerSideBar extends IProps {
  chatList: Array<IChatCard>,

  onRedirectToProfile: (e: Event) => void,
  onInput: () => void,
}
