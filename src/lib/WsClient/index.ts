import { STATES, TWsData } from "./types";

export class WsClient {
  private socket?: WebSocket;
  private pingInterval?: ReturnType<typeof setInterval>;
  private readonly pingIntervalTime = 30000;
  private _url: string;

  constructor(url: string) {
    this._url = url;
    this.socket = new WebSocket(this._url);
  }

  public getState = () => {
    if (!this.socket) return STATES[3];
    return STATES[this.socket.readyState];
  }

  public open = (callBack: () => void) => {
    const fn = () => {
      callBack();
      this.setupPing();
    }

    this.socket?.addEventListener('open', fn);
  }

  public close = (callBack: (event: CloseEvent) => void) => {
    const fn = (event: CloseEvent) => {
      callBack(event);

      clearInterval(this.pingInterval);
      this.pingInterval = undefined;
    }

    this.socket?.addEventListener('close', fn);
  }

  public message = (callBack: (event: MessageEvent) => void) => {
    const fn = (event: MessageEvent) => {
      callBack(event);
    }

    this.socket?.addEventListener('message', fn);
  }

  public error(callBack: (event: Event) => void) {
    this.socket?.addEventListener('error', callBack);
  }

  public send(data: TWsData) {
    if (!this.socket) {
      throw new Error("Socket is not connected");
    }

    this.socket.send(JSON.stringify(data));
  }

  private setupPing() {
    this.pingInterval = setInterval(() => {
      this.send({ type: "ping" });
    }, this.pingIntervalTime);
  }
}
