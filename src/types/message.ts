import { TFile } from "./file";

export interface TMessage {
  id: number;
  user_id: number;
  chat_id: number;
  time: string;
  timeFormatted?: string;
  type: string | 'message'| 'file';
  content: number | string;
  file?: TFile;
  main?: boolean;
  is_read?:boolean;
  is_author_message?:boolean;
}
