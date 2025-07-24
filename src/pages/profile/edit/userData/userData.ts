import { Block, connectToStore } from '@/lib';
import { InputField } from '@/components/inputField';
import { IProfileEditDataPageProps } from './types';
import {
  emailValidation, loginValidation, nameValidation, phoneValidation,
} from '@/lib/Validation';

import arrowbackImg from '@/assets/arrow_back.svg';

import userDataTemplate from './userData.hbs?raw';
import { Routes } from '@/types';
import { TUser } from '@/types/user';
import { updateAvatar, updateProfile } from '@/services/user';

class ProfileEditData extends Block {
  constructor() {
    const props: IProfileEditDataPageProps = {
      redirectBackIcon: arrowbackImg,

      user: window.store.getState().user,
      
      modalConfigs: {
        editAvatar: {
          content: 'FileInputContent',
          showModal: false,
          onClose: (event) => this.closeModal(event, 'editAvatar'),
          onSubmit: (event) => this.editAvatar(event),
        },
      },

      validationRules: {
        email: emailValidation,
        login: loginValidation,
        name: nameValidation,
        phone: phoneValidation,
      },
      onAvatarClick: (event) => {
        event.preventDefault();
        this.switchModalVisibility(true, 'editAvatar');
      },
      onRedirect: () => {
        window.router.go(Routes.Profile);
      },
      onSubmit: (event) => {
        event.preventDefault();

        const email = (this.getRefs().email as InputField).value();
        const login = (this.getRefs().login as InputField).value();
        const first_name = (this.getRefs().first_name as InputField).value();
        const second_name = (this.getRefs().second_name as InputField).value();
        const display_name = (this.getRefs().display_name as InputField).value();
        const phone = (this.getRefs().phone as InputField).value();

        const userData = {
          first_name,
          second_name,
          display_name,
          login,
          email,
          phone,
        } as TUser;

        if (email && login && first_name && second_name && display_name && phone) {
          updateProfile(userData)
            .then(() => window.router.go(Routes.Profile))
            .catch((error) => console.warn('update profile:', error));
        }
      },
    };

    console.log(props);

    super(props);
  }

  get props() {
    return this._props as IProfileEditDataPageProps;
  }

  editAvatar(event: Event) {
    event.preventDefault();

    const data = new FormData();
    const avatarFile = (this.getRefs().editAvatar.getRefs().fileInput.element as HTMLInputElement).files![0];
    data.append("avatar", avatarFile);
    updateAvatar(data)
      .then(() => console.log('avatar updated'))
      .catch((error) => console.error('change user avatar:', error));
  }

  closeModal(event: Event, modalName: string) {
    const targetElement = (event.target as HTMLElement);

    if (targetElement.className !== 'overlay') {
      return;
    }

    this.switchModalVisibility(false, modalName);
  }

  switchModalVisibility(showModal: boolean, modalName: string) {
    const propsToSet = { ...this.props };
    propsToSet.modalConfigs[modalName].showModal = showModal;
    this.setProps(propsToSet);
  }

  render() {
    return userDataTemplate;
  }
}

const ProfileEditDataCmp = connectToStore(({ user }) => ({ user }))(ProfileEditData);
export { ProfileEditDataCmp };
