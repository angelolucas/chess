import { Direction, Piece, Player } from '@/types/app.types';
import getRowColByPosition from './getRowColByPosition';
import { BOARD_COLS } from '@/constants/board';

interface GetSquareByDirection {
  piece: Piece;
  direction: Direction;
}

export const getSquareByDirection = ({
  piece,
  direction,
}: GetSquareByDirection) => {
  const { row, col } = getRowColByPosition(piece.position);

  switch (direction) {
    // Straight moves
    case Direction.forward:
      return piece.player === Player.black
        ? piece.position + BOARD_COLS
        : piece.position - BOARD_COLS;
    // case Direction.backward:
    //   return piece.position - 8;
    // case Direction.left:
    //   return piece.position - 1;
    case Direction.right:
      return piece.player === Player.black
        ? piece.position + 1
        : piece.position - 1;

    // // Diagonal moves
    // case Direction.forwardLeft:
    //   return piece.position + 7;
    // case Direction.forwardRight:
    //   return piece.position + 9;
    // case Direction.backwardLeft:
    //   return piece.position - 9;
    // case Direction.backwardRight:
    //   return piece.position - 7;
  }
};
