import { TUser } from '@/types/user';
import { IForm, IProps } from '../../../../types';

export interface IProfileEditPasswordPageProps extends IProps, IForm {
  redirectBackIcon: string,

  user: TUser | null,
}
