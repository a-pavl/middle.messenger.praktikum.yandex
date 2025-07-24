import { TChat } from '@/types/chat';
import {
  IModalConfig, IProps,
} from '../../types';
import { IContextMenu } from '../contextMenu/types';

export interface IChatWindow extends IProps {
  chat?: TChat,
  userSettings: IContextMenu,
  modalConfigs: Record<string, IModalConfig>,

  onChatIconClick: (e: Event) => void,
}
