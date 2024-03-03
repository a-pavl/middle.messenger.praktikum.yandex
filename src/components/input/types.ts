import { IProps } from '../../types';
import { IErrorProps } from '../error/types';

export interface IInputProps extends IProps {
  name: string,
  type: string,
  src?: string,
  value?: string,
  className?: string,
  placeholder?: string,

  error?: IErrorProps,

  validate?(input: string): string,
  onBlur?: () => void,
  onClick?: () => void,
  onInput?: () => void,

  autocomplete?: string,
}
