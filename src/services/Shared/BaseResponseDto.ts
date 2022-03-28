export interface BaseResponseDto<T> {
  code: string;
  msg: string;
  data: T;
}
