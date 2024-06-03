import { Direction, Move, MoveType, Piece, PieceType } from '@/types/app.types';
import { legalMoves } from './legalMoves';
import { getSquareByDirection } from '@/helpers/getSquareByDirection';

interface NewBoardPositionProps {
  piece: Piece;
  move: Move;
  boardPosition: Piece[];
  promotionPiece?: PieceType;
}

export const newBoardPosition = ({
  piece,
  move,
  boardPosition,
  promotionPiece,
}: NewBoardPositionProps) => {
  let newBoardPosition = [...boardPosition];

  // Capture piece
  newBoardPosition = newBoardPosition.filter((piece) => {
    if (piece.position === move.square) {
      console.log(piece, move);
    }
    return piece.position !== move.square;
  });

  // En passant
  if (move.type === MoveType.enPassant) {
    const squareOpponentPawn = getSquareByDirection({
      direction: Direction.backward,
      player: piece.player,
      position: move.square,
    });

    newBoardPosition = newBoardPosition.filter((currentPiece) => {
      return currentPiece.position !== squareOpponentPawn;
    });
  }

  // Move pieces
  newBoardPosition = newBoardPosition.map((currentPiece) => {
    if (currentPiece.id === piece.id) {
      return {
        ...currentPiece,
        moved: true,
        position: move.square,
      };
    }

    return currentPiece;
  });

  // Promotion
  if (promotionPiece) {
    newBoardPosition = newBoardPosition.map((currentPiece) => {
      if (currentPiece.position === move.square) {
        return {
          ...currentPiece,
          type: promotionPiece,
        };
      }

      return currentPiece;
    });
  }

  // Update legal moves
  newBoardPosition = newBoardPosition.map((currentPiece) => ({
    ...currentPiece,
    moves: legalMoves({
      piece: currentPiece,
      boardPosition: newBoardPosition,
      lastMove: { piece, move },
    }),
  }));

  return newBoardPosition;
};
