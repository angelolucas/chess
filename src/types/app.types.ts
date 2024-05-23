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

export enum Direction {
  // Straight moves
  forward = 10,
  backward = -10,
  left = -1,
  right = 1,

  // Diagonal moves
  forwardLeft = -9,
  forwardRight = -11,
  backwardLeft = 11,
  backwardRight = 9,

  // Two squares jump of pawn
  pawnTwoForward = 2,

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
