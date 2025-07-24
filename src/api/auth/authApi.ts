import { HttpClient } from "@/lib";
import { TUser } from "@/types/user";
import { TSignInInput, TSignUpResponse } from "./types";
import { TApiError, TResult } from "@/types/http";
import { BaseApi } from "../baseApi";

const authApi = new HttpClient("/auth");

export class AuthApi extends BaseApi {
  async signup(data: TUser): Promise<TResult<TSignUpResponse | TApiError>> {
    return authApi.post<TSignUpResponse>('/signup', {
      headers: { "Content-Type": 'application/json'},
      data: data
    })
  }

  async signin(data: TSignInInput): Promise<TResult<void | TApiError>> {
    return authApi.post<void>('/signin', {
      headers: { "Content-Type": 'application/json'},
      data: data
    })
  }

  async getUser(): Promise<TResult<TUser | TApiError>> {
    return authApi.get<TUser>('/user')
  }

  async logout(): Promise<TResult<void | TApiError>> {
    return authApi.post('/logout')
  }
}
