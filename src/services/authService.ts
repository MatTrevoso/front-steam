import { API } from "./api";

type AuthRequestDto = {
  email: string;
  password: string;
};

export const AuthService = {
  async signIn(data: AuthRequestDto) {
    return API.post("/auth", data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
};
