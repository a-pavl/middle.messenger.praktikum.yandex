import { IProps, IValidationRules } from '../../types';
import { IContextMenu } from '../contextMenu/types';

export interface IMessageInput extends IProps, IValidationRules {
  icon: string,
  messageAttachments: IContextMenu,
  onSend: () => void,
}
