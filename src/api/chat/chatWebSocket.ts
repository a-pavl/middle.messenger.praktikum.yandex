import { WsClient } from "@/lib";

export class ChatWebSocket extends WsClient {
  constructor(url: string, user_id: number, chat_id: number, token: string) {
    if (user_id) {
      url += `/${user_id}`;
    }
    if (chat_id) {
      url += `/${chat_id}`;
    }
    if (token) {
      url += `/${token}`;
    }

    super(url);
}

  public sendMessage = (message: string) => {
    const _message = {
      content: message,
      type: "message"
    };

    this.send(_message);
  }

  public sendFile = (idResource: string) => {
    const _message = {
      content: idResource,
      type: "file"
    };

    this.send(_message);
  }

  public sendRequestForgetMessage = (limit: number = 0) => {
    const _message = {
      content: String(limit),
      type: "get old"
    };

    this.send(_message);
  }
}
