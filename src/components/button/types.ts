import { IProps } from '../../types';

export interface IButtonProps extends IProps {
  label: string,
  className?: string,
  onClick?: () => void,
}
