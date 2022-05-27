import { API } from "../api";
import { Game } from "../../types/Game";
import { Pagining } from "../Shared/Pagining";
import { requestResolver } from "../Shared/requestResolver";

type GamesByGenre = Pagining & {
  genre: number;
};

export const gamesService = {
  GAMES: "/api/jogos/",
  getGames({ page, take }: Pagining) {
    return requestResolver<Game[]>(
      API.get(`${this.GAMES}all?page=${page}&take=${take}`)
    );
  },
  getGamesByGenre({ genre, page, take }: GamesByGenre) {
    return requestResolver<Game[]>(
      API.get(`${this.GAMES}${genre}/all?page=${page}&take=${take}`)
    );
  },
};
