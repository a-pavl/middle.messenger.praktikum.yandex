import { ChatWebSocket } from "@/api";
import { TMessage } from "./message";
import { TUser } from "./user";

export interface TChat {
  id: number;
  title: string;
  avatar?: string;
  type: string
  unread_count: number;
  created_by: number;
  last_message: TMessage;

  token?: string;
  users?: TUser[];
  connection?: ChatWebSocket | null;
  messages?: TMessage[] | null;
}
