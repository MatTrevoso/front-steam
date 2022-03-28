import { API } from "./api";

export const gamesService = {
  async getGames() {
    return API.get("/games")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
};
