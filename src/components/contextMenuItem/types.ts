import { IProps } from '../../types';

export interface IContextMenuItem extends IProps {
  icon: string,
  text: string,
  onClick: () => void,
}
