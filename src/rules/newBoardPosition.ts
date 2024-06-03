import {
  Direction,
  Move,
  MoveType,
  Piece,
  PieceType,
  Player,
} from '@/types/app.types';
import { legalMoves } from './legalMoves';
import { getSquareByDirection } from '@/helpers/getSquareByDirection';

interface NewBoardPositionProps {
  player: Player;
  piece: Piece;
  move: Move;
  boardPosition: Piece[];
  promotionPiece?: PieceType;
  shadowMove?: boolean;
}

export const newBoardPosition = ({
  player,
  piece,
  move,
  boardPosition,
  promotionPiece,
  shadowMove,
}: NewBoardPositionProps) => {
  let newBoardPosition = [...boardPosition];

  // Capture piece
  newBoardPosition = newBoardPosition.filter(
    (piece) => piece.position !== move.square
  );

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

  // Update current player's moves
  newBoardPosition = newBoardPosition.map((currentPiece) => {
    if (currentPiece.player === player) {
      return {
        ...currentPiece,
        moves: legalMoves({
          player,
          piece: currentPiece,
          boardPosition: newBoardPosition,
          lastMove: { piece, move },
          shadowMove,
        }),
      };
    }
    return currentPiece;
  });

  // Update opponent's moves
  newBoardPosition = newBoardPosition.map((currentPiece) => {
    if (currentPiece.player !== player) {
      return {
        ...currentPiece,
        moves: legalMoves({
          player,
          piece: currentPiece,
          boardPosition: newBoardPosition,
          lastMove: { piece, move },
          shadowMove,
        }),
      };
    }
    return currentPiece;
  });

  return newBoardPosition;
};
