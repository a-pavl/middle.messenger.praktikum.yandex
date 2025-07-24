import { TUser } from '@/types/user';
import { IForm, IModalConfig, IProps } from '@/types';

export interface IProfileEditDataPageProps extends IProps, IForm {
  redirectBackIcon: string,

  user: TUser | null,
  modalConfigs: Record<string, IModalConfig>,

  onAvatarClick: (e: Event) => void,
}
