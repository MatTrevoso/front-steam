export type Midia = {
  id: number;
  id_Jogo: number;
  tipo: number;
  caminho: string;
};

export interface GamesResponseDto {
  id: number;
  id_Promocao: number;
  nome: string;
  sinopse: string;
  valor: number;
  esta_Disponivel: false;
  midia: Midia[];
}
