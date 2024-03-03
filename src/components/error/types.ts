import { IProps } from '../../types';

export interface IErrorProps extends IProps {
  isError: boolean,
  text: string,
}
