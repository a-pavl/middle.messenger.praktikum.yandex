import { UserApi } from "@/api";
import { TChangePasswordInput } from "@/api/user/types";
import { TUser } from "@/types/user";

const userApi = new UserApi();

const updateProfile = async (data: TUser) => {
  const response = await userApi.updateProfile(data);
  
  if (userApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }

  window.store.set({user: response.data as TUser});
}

const updatePassword = async (data: TChangePasswordInput) => {
  const response = await userApi.updatePassword(data);
  
  if (userApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }
}

const updateAvatar = async (data: FormData) => {
  const response = await userApi.updateAvatar(data);
  
  if (userApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }

  window.store.set({user: response.data});
}

const searchUserByLogin = async (login: string) => {
  const response = await userApi.searchUserByLogin(login);
  
  if (userApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }

  return response.data as TUser[];
}

export {
  updateProfile,
  updatePassword,
  updateAvatar,
  searchUserByLogin
}
