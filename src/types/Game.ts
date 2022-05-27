import { Midia } from "./Midia";

export type Game = {
  id: number;
  id_Promocao: number;
  nome: string;
  sinopse: string;
  valor: number;
  esta_Disponivel: false;
  midia: Midia[];
};
