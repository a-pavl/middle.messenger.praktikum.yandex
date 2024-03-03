import { IProps } from '../../types';

interface IError {
  code: number;
  text: string;
}

export interface IErrorPageProps extends IProps {
  error: IError,
  onRedirect: (e: Event) => void
}
