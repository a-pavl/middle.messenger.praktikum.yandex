import { METHODS, Options, HttpRequest } from './types';

function queryStringify(data: { [key: string]: string }) {
  if (!data) return;

  const queryParams = [];
  for (const [key, value] of Object.entries(data)) {
    queryParams.push(`${key}=${value}`);
  }

  return `?${queryParams.join('&')}`;
}

export class Http {
  get: HttpRequest = (url, options = {}) => this.request(url, { ...options, method: METHODS.GET }, options.timeout);

  post: HttpRequest = (url, options = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  put: HttpRequest = (url, options = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  delete: HttpRequest = (url, options = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request = (url:string, options: Options = {}, timeout = 5000) => {
    const { method, headers, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject('Некорректный Http метод');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && !!data ? `${url}${queryStringify(data)}` : url,
      );

      for (const key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.timeout = timeout;
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
