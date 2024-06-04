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

export enum MoveType {
  enPassant = 'enPassant',
  longCastling = 'longCastling',
  shortCastling = 'shortCastling',
  promotion = 'promotion',
}

export type Move = {
  square: number;
  type?: MoveType;
};

export type Piece = {
  id: number;
  player: Player;
  type: PieceType;
  position: number;
  moved: boolean;
  moves: Array<Move>;
};

export enum Direction {
  // Straight moves
  forward = -10,
  backward = 10,
  left = -1,
  right = 1,

  // Diagonal moves
  forwardLeft = -11,
  forwardRight = -9,
  backwardLeft = 9,
  backwardRight = 11,

  // Two squares jump of pawn
  pawnTwoForward = -20,

  // Knight moves
  knightLeftBackward = -21,
  knightLeftForward = -19,
  knightBackwardLeft = -12,
  knightForwardLeft = -8,
  knightBackwardRight = 8,
  knightForwardRight = 12,
  knightRightBackward = 19,
  knightRightForwad = 21,
}
