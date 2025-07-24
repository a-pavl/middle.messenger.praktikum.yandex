import { TChat } from '@/types/chat';
import { IProps } from '../../types';

export interface IMessengerPageProps extends IProps {
  selectedChatId: number | null,
  chats: TChat[] | null,
}
