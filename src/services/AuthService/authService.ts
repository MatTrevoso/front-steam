import { API } from "../api";
import { BaseResponseDto } from "../Shared/BaseResponseDto";
import { LoginResponseDto } from "./LoginResponseDto";

type AuthRequestDto = {
  email: string;
  password: string;
};

export const AuthService = {
  async signIn(data: AuthRequestDto) {
    return API.post<BaseResponseDto<LoginResponseDto>>("/api/auth", data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
};
