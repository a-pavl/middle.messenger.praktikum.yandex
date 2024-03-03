import { IMessage, IProps } from '../../types';

export interface IMesssageListProps extends IProps {
  messageList: Array<IMessage>;
}
