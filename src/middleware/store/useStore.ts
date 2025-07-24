import { Store } from "@/lib";
import { TAppState } from "./types";

const initState: TAppState = {
  error: null,
  user: null,
  currentChatId: null,
  chats: [],
}

export function useStore() {
  window.store = new Store<TAppState>(initState);
}
