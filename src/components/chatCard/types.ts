import { TChat } from '@/types/chat';
import { IProps } from '../../types';

export interface IChatCard extends IProps {
  chat: TChat,
  showChatCounter: boolean;
}
