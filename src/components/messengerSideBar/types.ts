import { TChat } from '@/types/chat';
import { IModalConfig, IProps } from '../../types';

export interface IMessengerSideBar extends IProps {
  chats: Array<TChat>,
  
  modalConfigs: Record<string, IModalConfig>,

  createChatIcon: string;
  onAddChat: () => void,
  onRedirectToProfile: (e: Event) => void,
  onInput: () => void,
}
