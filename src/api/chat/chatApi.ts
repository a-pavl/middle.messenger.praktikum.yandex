import { TApiError, TResult } from "@/types/http";
import { TCreateChatResponse, TGetTokenResponse, TGetChatInput, TAddDeleteUserInput} from "./types";
import { HttpClient } from "@/lib";
import { TUser } from "@/types/user";
import { TChat } from "@/types/chat";
import { BaseApi } from "../baseApi";

const chatApi = new HttpClient('/chats');

export class ChatApi extends BaseApi {
  async getChats(data: TGetChatInput): Promise<TResult<TChat[] | TApiError>> {
    return chatApi.get<TChat[]>('', {
      data: data
    })
  }

  async createChat(title: string): Promise<TResult<TCreateChatResponse | TApiError>> {
    return chatApi.post<TCreateChatResponse>('', {
      headers: { "Content-Type": 'application/json' },
      data: { title: title }
    });
  }

  async deleteChat(id: number): Promise<TResult<object | TApiError>> {
    return chatApi.delete('', {
      headers: { "Content-Type": 'application/json'},
      data: { chatId: id }}
    );
  }

  async addUsersToChat(data: TAddDeleteUserInput) {
    return chatApi.put('/users', {
      headers: { "Content-Type": 'application/json'},
      data: data
    });
  }

  async deleteUsersFromChat(data: TAddDeleteUserInput) {
    return chatApi.delete('/users', {
      headers: { "Content-Type": 'application/json'},
      data: data
    });
  }

  async getChatUsers(id: number) {
    return chatApi.get<TUser[]>(`/${id}/users`);
  }

  async getChatToken(id: number) {
    return chatApi.post<TGetTokenResponse>(`/token/${id}`);
  }

  async updateChatAvatar(file: FormData, chatId: number) {
    file.append('chatId', String(chatId));
    return chatApi.put('/avatar', { data: file });
  }
}
