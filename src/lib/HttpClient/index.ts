import { TRequest, TResult } from '@/types/http';
import { METHODS, Options } from './types';
import { HOST } from '@/config/auth'

function queryStringify(data: object) {
  if (!data) return;

  const queryParams = [];
  for (const [key, value] of Object.entries(data)) {
    queryParams.push(`${key}=${value}`);
  }

  return `?${queryParams.join('&')}`;
}

export class HttpClient {
  private baseUrl: string = HOST;

  constructor(endpoint: string) {
    this.baseUrl = this.baseUrl.concat(endpoint);
  }

  get: TRequest = (path, options = {}) => {
    return this.request(`${this.baseUrl}${path}`, { ...options, method: METHODS.GET }, options.timeout);
  }

  post: TRequest = (path, options = {}) => {
    return this.request(`${this.baseUrl}${path}`, { ...options, method: METHODS.POST }, options.timeout);
  }

  put: TRequest = (path, options = {}) => {
    return this.request(`${this.baseUrl}${path}`, { ...options, method: METHODS.PUT }, options.timeout);
  }

  delete: TRequest = (path, options = {}) => {
    return this.request(`${this.baseUrl}${path}`, { ...options, method: METHODS.DELETE }, options.timeout);
  }

  request<TResponse> (url:string, options: Options = {}, timeout = 5000) : Promise<TResult<TResponse>> {
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
        if (xhr.getResponseHeader('content-type')?.includes('application/json')) {
          resolve({
              status: xhr.status,
              data: JSON.parse(xhr.responseText)
          });
        } else {
            resolve({
                status: xhr.status,
                data: xhr.responseText as TResponse,
            });
        }
      };

      xhr.withCredentials = true;
      xhr.timeout = timeout;
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
