import { IProps } from '../../types';
import { IInputProps } from '../input/types';
import { IErrorProps } from '../error/types';

export interface IInputFieldProps extends IProps, IInputProps {
  error: IErrorProps,
  inputFieldClassName?: string,
  showError?: boolean,

  validate(input: string): string,
  onBlur?: () => void
}
