import { IMessage, IProps } from '../../types';

export interface IMesssageListProps extends IProps {
  messages: Array<IMessage>;
}
