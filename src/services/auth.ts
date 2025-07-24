import { AuthApi } from "@/api";
import { TSignInInput } from "@/api/auth/types";
import { Routes } from "@/types";
import { TUser } from "@/types/user";
import { getChats } from "./chat";

const authApi = new AuthApi();

const signup = async (data: TUser) => {
  const response = await authApi.signup(data);

  if (authApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }

  await getUser();
}

const signin = async (data: TSignInInput) => {
  const response = await authApi.signin(data);

  if (authApi.responseHasError(response)) {
    if (response.data.reason === "User already in system") {
      window.router.go(Routes.Messenger);
    } else {
      throw Error(response.data.reason);
    }
  }
  
  await getUser();
  await getChats({});
}

const getUser = async () => {
  const response = await authApi.getUser();

  if (authApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }

  window.store.set({user: response.data as TUser});
}

const logout = async () => {
  const response = await authApi.logout();

  if (authApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }

  window.store.set({user: null});
}

export {
  signup,
  signin,
  getUser,
  logout
}
