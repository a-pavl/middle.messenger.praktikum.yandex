import { Routes } from "@/types";
import { TApiError, TResult } from "@/types/http";

class BaseApi {
  public create() {
    throw new Error("Not implemented");
  }

  public request() {
    throw new Error("Not implemented");
  }

  public update() {
    throw new Error("Not implemented");
  }

  public delete() {
    throw new Error("Not implemented");
  }

  responseHasError = (response: TResult<unknown>): response is TResult<TApiError> => {
    switch (response.status) {
      case 200:
        return false;
      case 500:
        window.router.go(Routes.BadRequest);
        return false;
      default: {
        return true;
      }
    }
}
}

export { BaseApi };
