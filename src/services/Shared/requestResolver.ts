import { AxiosResponse } from "axios";
import { BaseResponseDto } from "./BaseResponseDto";

export function requestResolver<T>(
  promise: Promise<AxiosResponse<BaseResponseDto<T>>>
) {
  return promise
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
}
