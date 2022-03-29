import { API } from "../api";
import { BaseResponseDto } from "../Shared/BaseResponseDto";
import { GamesResponseDto } from "./GamesResponseDto";

type GamesOutdoorsRequestDto = {
  page: number;
  take: number;
};

type GamesByGenreRequestDto = GamesOutdoorsRequestDto & {
  genre: number;
};

export const gamesService = {
  async getGames({ page, take }: GamesOutdoorsRequestDto) {
    return API.get<BaseResponseDto<GamesResponseDto[]>>(
      `/api/jogos/all?page=${page}&take=${take}`
    )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  //
  async getGamesByGenre({ genre, page, take }: GamesByGenreRequestDto) {
    return API.get<BaseResponseDto<GamesResponseDto>>(
      `/api/jogos/all?page=${page}&take=${take}`
    )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  },
};
