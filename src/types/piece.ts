export type TPieceColor = 'white' | 'black';

export type TPieceType =
  | 'pawn'
  | 'rook'
  | 'knight'
  | 'bishop'
  | 'queen'
  | 'king';

export interface IBasicPiece {
  color: TPieceColor;
  type: TPieceType;
  position: number;
}

export interface IPiece extends IBasicPiece {
  id: number;
  selected: boolean;
  moved: boolean;
  moves: Array<number>;
}
