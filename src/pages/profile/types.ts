import { TUser } from '@/types/user';
import { IProps } from '../../types';

export interface IProfilePageProps extends IProps {
  redirectBackIcon: string,

  user: TUser | null,

  onLogout: (e: Event) => void,
  onRedirectToMainPage: (e: Event) => void,
  onRedirectToProfileEditData: (e: Event) => void,
  onRedirectToProfileEditPassword: (e: Event) => void
}
