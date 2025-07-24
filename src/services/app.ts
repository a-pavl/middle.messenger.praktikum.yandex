import { Routes } from "@/types";
import { getUser } from "./auth";
import { getChats } from "./chat";

export const initApp = async () => {
  try {
    await getUser();
  } catch (error) {
    if (window.router.currentRoutePathName() !== Routes.SignUp) {
      window.router.go(Routes.Login);
    }

    return;
  }

  await getChats({});
}
