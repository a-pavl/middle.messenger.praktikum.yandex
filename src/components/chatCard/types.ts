import { IProps, IMessage, IChat } from '../../types';

export interface IChatCard extends IProps {
  chat: IChat,
  lastMessage?: IMessage,
}
