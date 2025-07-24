import { ChatWebSocket } from "@/api";
import { SOCKET_CHAT } from "@/config/auth";
import { TChat } from "@/types/chat";
import { TMessage } from "@/types/message";
import { TUser } from "@/types/user";
import { getChats } from "./chat";

export const openConnectMessages = (chat: TChat, currentUser: TUser) => {
  if (!chat.id) return;
  if (!chat.users) return;
  if (!chat.token) return;
  if (chat.connection && chat.connection.getState() === 'OPEN') return;
  if (!currentUser.id) return;

  const socket = new ChatWebSocket(SOCKET_CHAT, currentUser.id, chat.id, chat.token);
  socket.open(() => {
    getAllNewMessage(0, chat);
  })

  socket.message(async (event: MessageEvent) => {
    let message: TMessage | null = null;

    try {
      message = JSON.parse(event.data);
    } catch (e) {
      console.error("'Unknown message!'")
    }

    if (!message) {
      return;
    }

    message.chat_id = chat.id;

    if (message.type === 'message' || Array.isArray(message) || message.type === 'file') {
      if (!chat.messages) {
        chat.messages = [];
      }

      if (Array.isArray(message)) {
        message.reverse();
        chat.messages = chat.messages.concat(message);
      } else {
        chat.messages.push(message);
      }

      await getChats({})
      window.store.set({chats: window.store.getState().chats});
    }

    if (event.data.type === 'user connected') {
      console.log('user connected', event.data);
    }
  })

  chat.connection = socket;
  return chat;
}

export const sendMessage = (message: string) => {
  const state = window.store.getState();
  if (!state) return;

  const currentChatId = state.currentChatId;
  const chat = state.chats!.find((chat) => chat.id == currentChatId )

  const user= state.user;
  if (!chat) {
    throw Error('Выберите чат');
  }

  if (chat.connection && chat.connection.getState() === 'OPEN') {
    chat.connection.sendMessage(message);
  } else if (user) {
    openConnectMessages(chat, user)
  }
}

export const getAllNewMessage = (limit: number, chat: TChat | null) => {
  if (!chat) {
    throw Error('Выберите чат');
  }

  if (chat.connection) {
    chat.connection.sendRequestForgetMessage(limit);
    chat.unread_count = 0;
  }
}
