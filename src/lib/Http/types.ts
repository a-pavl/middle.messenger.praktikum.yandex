export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type Options = {
  method?: METHODS.GET | METHODS.POST | METHODS.PUT | METHODS.DELETE,
  headers?: Record<string, string>,
  data?: { [key: string]: string },
  timeout?: number,
  retries?: number,
  params?: object,
};

export type HttpRequest = (url: string, options?: Options) => Promise<unknown>;
