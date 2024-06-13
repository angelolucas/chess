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
  isShadowMove?: boolean;
}

export const newBoardPosition = ({
  player,
  piece,
  move,
  boardPosition,
  promotionPiece,
  isShadowMove,
}: NewBoardPositionProps) => {
  let newBoardPosition = [...boardPosition];

  // Capture piece
  newBoardPosition = newBoardPosition.filter(
    (piece) => piece.position !== move.square
  );

  // Move piece
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

  // Castling
  const castlingRookPositions = {
    [Player.white]: {
      [MoveType.shortCastling]: { from: 88, to: 86 },
      [MoveType.longCastling]: { from: 81, to: 84 },
    },
    [Player.black]: {
      [MoveType.shortCastling]: { from: 18, to: 16 },
      [MoveType.longCastling]: { from: 11, to: 14 },
    },
  };

  if (
    move.type === MoveType.shortCastling ||
    move.type === MoveType.longCastling
  ) {
    const rookMove = castlingRookPositions[piece.player][move.type];
    newBoardPosition = newBoardPosition.map((currentPiece) => {
      if (currentPiece.position === rookMove.from) {
        return {
          ...currentPiece,
          position: rookMove.to,
          moved: true,
        };
      }
      return currentPiece;
    });
  }

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
          isShadowMove,
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
          isShadowMove,
        }),
      };
    }
    return currentPiece;
  });

  return newBoardPosition;
};
