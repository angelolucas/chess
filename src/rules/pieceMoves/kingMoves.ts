import { getTargetByDirection } from '@/helpers/getTargetByDirection';
import {
  Direction,
  Move,
  MoveType,
  Piece,
  PieceType,
  Player,
} from '@/types/app.types';
import { verifyCheck } from '../gameStatus/verifyCheck';

interface KingMoves {
  piece: Piece;
  boardPosition: Piece[];
  player: Player;
}

export const kingMoves = ({ piece, boardPosition, player }: KingMoves) => {
  const moves: Move[] = [];

  const directions = [
    Direction.forward,
    Direction.backward,
    Direction.left,
    Direction.right,
    Direction.forwardLeft,
    Direction.forwardRight,
    Direction.backwardLeft,
    Direction.backwardRight,
  ];

  directions.forEach((direction) => {
    const targetSquare = getTargetByDirection({
      direction,
      boardPosition,
      piece,
    });

    if (targetSquare) {
      if (targetSquare.opponent) {
        moves.push({ square: targetSquare.square, type: MoveType.capture });
      } else if (!targetSquare.piece) {
        moves.push({ square: targetSquare.square, type: MoveType.normal });
      }
    }
  });

  // Castling
  if (piece.moved) return moves;

  const opponent = player === Player.white ? Player.black : Player.white;
  const isCheck = verifyCheck({
    player: opponent,
    boardPosition,
  });

  if (isCheck) return moves;

  const rooks = boardPosition.filter(
    (currentPiece) =>
      currentPiece.type === PieceType.rook &&
      currentPiece.player === piece.player &&
      !currentPiece.moved
  );

  rooks.forEach((rook) => {
    const isLongSide = rook.position % 10 === 1;
    const isShortSide = rook.position % 10 === 8;

    if (isLongSide) {
      const squaresBetween = [
        piece.position - 1,
        piece.position - 2,
        piece.position - 3,
      ];
      const emptySquaresBetween = squaresBetween.every((square) => {
        const piece = boardPosition.find((p) => p.position === square);
        return !piece;
      });

      if (emptySquaresBetween) {
        moves.push({ square: piece.position - 2, type: MoveType.longCastling });
      }
    }
    if (isShortSide) {
      const squaresBetween = [piece.position + 1, piece.position + 2];
      const emptySquaresBetween = squaresBetween.every((square) => {
        const piece = boardPosition.find(
          (currentPiece) => currentPiece.position === square
        );
        return !piece;
      });

      if (emptySquaresBetween) {
        moves.push({
          square: piece.position + 2,
          type: MoveType.shortCastling,
        });
      }
    }
  });

  return moves;
};
