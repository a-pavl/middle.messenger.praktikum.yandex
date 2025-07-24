import { HttpClient } from "@/lib";
import { TUser } from "@/types/user";
import { TApiError, TResult } from "@/types/http";
import { TChangePasswordInput } from "./types";
import { BaseApi } from "../baseApi";

const userApi = new HttpClient("/user");

export class UserApi extends BaseApi {
  async updateProfile(data: TUser): Promise<TResult<TUser | TApiError>> {
    return userApi.put('/profile', {
      headers: { "Content-Type": 'application/json'},
      data: data
    })
  }

  async updatePassword(data: TChangePasswordInput) {
      return userApi.put<void>('/password', {
          headers: { "Content-Type": 'application/json'},
          data: data
      })
  }

  async updateAvatar(file: FormData) {
      return userApi.put<TUser>('/profile/avatar', {
          data: file
      })
  }

  async getUserByID(id: number) {
      return userApi.get<TUser>(`/${id}`)
  }

  async searchUserByLogin(login: string) {
      return userApi.post<TUser[]>('/search', {
          headers: { "Content-Type": 'application/json'},
          data: { login }
      })
  }
}
