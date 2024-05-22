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
  forward = 'forward',
  backward = 'backward',
  left = 'left',
  right = 'right',

  // Diagonal moves
  forwardLeft = 'forwardLeft',
  forwardRight = 'forwardRight',
  backwardLeft = 'backwardLeft',
  backwardRight = 'backwardRight',

  // Two squares jump of pawn
  pawnTwoForward = 'pawnTwoForward',

  // Knight moves
  knightLeftBackward = 'knightLeftBackward',
  knightLeftForward = 'knightLeftForward',
  knightBackwardLeft = 'knightBackwardLeft',
  knightForwardLeft = 'knightForwardLeft',
  knightBackwardRight = 'knightBackwardRight',
  knightForwardRight = 'knightForwardRight',
  knightRightBackward = 'knightRightBackward',
  knightRightForwad = 'knightRightForward',
}
