import { IForm, IProps } from '../../../../types';

export interface IProfileEditDataPageProps extends IProps, IForm {
  redirectBackIcon: string,

  avatar: string,
  email: string,
  login: string,
  firstName: string,
  secondName: string,
  displayName: string,
  phone: string,
}
