import { IProps } from '../../types';

export interface IProfilePageProps extends IProps {
  redirectBackIcon: string,

  avatar: string,
  email: string,
  login: string,
  firstName: string,
  secondName: string,
  displayName: string,
  phone: string,

  onRedirectToMainPage: (e: Event) => void,
  onRedirectToLoginPage: (e: Event) => void,
  onRedirectToProfileEditData: (e: Event) => void,
  onRedirectToProfileEditPassword: (e: Event) => void
}
