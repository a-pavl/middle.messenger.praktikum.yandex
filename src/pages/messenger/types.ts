import { IChatCard } from '../../components/chatCard/types';
import { IChat, IMessage, IProps } from '../../types';

export interface IMessengerPageProps extends IProps {
  chatList: Array<IChatCard>,
  selectedChat: IChat,
  messageList: Array<IMessage>,
}
