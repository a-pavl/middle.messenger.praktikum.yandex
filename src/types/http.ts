import { Options } from "@/lib/HttpClient/types";

type TApiError = {
  reason: string;
};

export type TRequest = <T>(url: string, options?: Options) => Promise<TResult<T>>;

type TResult<TResponse> = {
  status: number;
  data: TResponse
}

export type { TApiError, TResult };
