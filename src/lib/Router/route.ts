import { Block } from "..";
import { IRouter } from "./types";

export class Route {
  _pathname: string;
  _blockClass: typeof Block;
  _block: Block | null;
  _props: IRouter;

  constructor(pathname: string, view: typeof Block, props: IRouter) {
    this._pathname = pathname;
    this._blockClass = view;
    this._props = props;

    this._block = null;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.remove();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
        this._block = new this._blockClass();
    }

    this._block.show(this._props.rootQuery);
  }
}
