import { TChat } from "@/types/chat";
import { TUser } from "@/types/user";

export type TAppState = {
  error: string | null,
  user: TUser | null,
  chats: TChat[] | null,
  currentChatId: number | null,
}
