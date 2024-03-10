import { Router } from "../../lib";
import { Routes } from "../../types";
import * as Pages from "../../pages";

const rootQuery = "#app";
const router = new Router(rootQuery);
router
  .use(Routes.BadRequest, Pages.BadRequest)
  .use(Routes.Home, Pages.Login)
  .use(Routes.Login, Pages.Login)
  .use(Routes.Messenger, Pages.Messenger)
  .use(Routes.NotFound, Pages.NotFound)
  .use(Routes.Profile, Pages.Profile)
  .use(Routes.ProfileData, Pages.ProfileEditData)
  .use(Routes.ProfilePassword, Pages.ProfileEditPassword)
  .use(Routes.SignUp, Pages.Signup);

export function useRouter() {
  window.router = router;
  router.start();
}
