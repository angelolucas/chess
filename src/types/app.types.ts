export enum Player {
  white = 'white',
  black = 'black',
}

export enum PieceType {
  king = 'king',
  queen = 'queen',
  bishop = 'bishop',
  knight = 'knight',
  rook = 'rook',
  pawn = 'pawn',
}

export type Piece = {
  id: number;
  player: Player;
  type: PieceType;
  position: number;
  moved: boolean;
  moves: Array<number>;
};
