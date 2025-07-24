import { ChatApi } from "@/api"
import { TAddDeleteUserInput, TCreateChatResponse, TGetChatInput } from "@/api/chat/types";
import { TChat } from "@/types/chat";
import { openConnectMessages } from "./message";
import { TIndexed, merge } from "@/lib";
import { TUser } from "@/types/user";

const chatApi = new ChatApi();

const getChats = async (data: TGetChatInput) => {
  const response = await chatApi.getChats(data);

  if (chatApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }

  const oldChats = window.store.getState().chats;
  const newChats = response.data as TChat[];

  const connectedChats = await Promise.all(newChats.map(async (newChat) => {
    const oldChat = oldChats!.find((oldChat) => newChat.id === oldChat.id);
    if (oldChat) {
      oldChat.users = await getChatUsers(oldChat.id);
      return merge(oldChat as object as TIndexed, newChat as object as TIndexed) as object as TChat;
    } else {
      const me = window.store.getState().user;
      newChat.token = await getChatToken(newChat.id);
      newChat.users = await getChatUsers(newChat.id);
      if (me) {
        const newConnectedChat = openConnectMessages(newChat, me);
        return newConnectedChat ? newConnectedChat : newChat;
      } else {
        return newChat;
      }
    }
  }))

  window.store.set({chats: connectedChats });
}

const createChat = async (title: string) => {
  const response = await chatApi.createChat(title);

  if (chatApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }

  return response.data as TCreateChatResponse;
}

const deleteChat = async (id: number) => {
  const response = await chatApi.deleteChat(id);

  if (chatApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }
}

const addUserToChat = async (data: TAddDeleteUserInput) => {
  const response = await chatApi.addUsersToChat(data);
  
  if (chatApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }
}

const deleteUsersFromChat = async (data: TAddDeleteUserInput) => {
  const response = await chatApi.deleteUsersFromChat(data);

  if (chatApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }

  await getChats({});

}

const getChatUsers = async (chatID: number) => {
  const response = await chatApi.getChatUsers(chatID);

  if (chatApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }

  return response.data as TUser[];
}

const updateChatAvatar = async (file: FormData, chatID: number) => {
  const response = await chatApi.updateChatAvatar(file, chatID);

  if (chatApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }

  await getChats({});

  return response.data as TUser[];
}

const getChatToken = async (chatID: number) => {
  const response = await chatApi.getChatToken(chatID);

  if (chatApi.responseHasError(response)) {
    throw Error(response.data.reason);
  }

  return response.data.token;
}

export {
  getChats,
  createChat,
  deleteChat,
  addUserToChat,
  deleteUsersFromChat,
  getChatUsers,
  updateChatAvatar,
  getChatToken,
}
