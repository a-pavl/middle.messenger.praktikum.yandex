import { IProps } from '../../types';
import { IContextMenuItem } from '../contextMenuItem/types';

export interface IContextMenu extends IProps {
  className?: string,
  icon: string,
  items: Array<IContextMenuItem>,
}
