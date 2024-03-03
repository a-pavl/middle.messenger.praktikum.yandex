import {
  IChat, IMessage, IModalConfig, IProps,
} from '../../types';
import { IContextMenu } from '../contextMenu/types';

export interface IChatWindow extends IProps {
  chat: IChat,
  messageList: Array<IMessage>,
  userSettings: IContextMenu,
  modalConfigs: Record<string, IModalConfig>,
}
