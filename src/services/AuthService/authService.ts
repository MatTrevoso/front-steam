import { User } from "../../types/User";
import { API } from "../api";
import { SignInResponseDto } from "./SignInResponseDto";
import { requestResolver } from "../Shared/requestResolver";

type SignInRequestDto = Omit<User, "userName">;

export const AuthService = {
  signIn(data: SignInRequestDto) {
    return requestResolver<SignInResponseDto>(API.post("/api/auth", data));
  },
};
