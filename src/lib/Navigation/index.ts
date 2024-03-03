import * as Pages from '../../pages';
import { IPageEnum } from './types';

const pages: IPageEnum = {
  notFound: Pages.NotFound,
  badRequest: Pages.BadRequest,
  login: Pages.Login,
  signup: Pages.Signup,
  profile: Pages.Profile,
  profileEditData: Pages.ProfileEditData,
  profileEditPassword: Pages.ProfileEditPassword,
  messenger: Pages.Messenger,
};

export function navigation(page: string) {
  const app = document.getElementById('app');

  const PageComponent = pages[page];
  const htmlElement = new PageComponent().getContent();
  if (htmlElement) {
    app?.replaceChildren(htmlElement);
  }
}
