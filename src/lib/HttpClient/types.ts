export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type Options = {
  method?: METHODS.GET | METHODS.POST | METHODS.PUT | METHODS.DELETE,
  headers?: Record<string, string>,
  data?: object | FormData;
  timeout?: number,
  retries?: number,
  params?: object,
};
