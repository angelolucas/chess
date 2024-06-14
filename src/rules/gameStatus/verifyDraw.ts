import { getRowColByPosition } from '@/helpers/getRowColByPosition';
import { Piece, PieceType, DrawType } from '@/types/app.types';

interface VerifyDraw {
  boardPosition: Piece[];
  boardHistory: Piece[][];
  isCheck: boolean;
  hasPlayerMoves: boolean;
}

const boardPositionToString = (boardPosition: Piece[]): string => {
  return boardPosition
    .map((piece) => `${piece.player}-${piece.type}-${piece.position}`)
    .sort()
    .join(',');
};

const countOccurrences = (
  boardHistory: Piece[][],
  currentPosition: string
): number => {
  return boardHistory.filter(
    (historyPosition) =>
      boardPositionToString(historyPosition) === currentPosition
  ).length;
};

export const verifyDraw = ({
  boardPosition,
  boardHistory,
  isCheck,
  hasPlayerMoves,
}: VerifyDraw): DrawType | null => {
  if (!boardPosition.length) return null;

  // Check for insufficient material
  const remainingPieces = boardPosition.filter(
    (piece) => piece.type !== PieceType.king
  );

  if (remainingPieces.length === 0) {
    return DrawType.insufficientMaterial;
  }

  if (remainingPieces.length === 1) {
    const piece = remainingPieces[0];
    if (piece.type === PieceType.bishop || piece.type === PieceType.knight) {
      return DrawType.insufficientMaterial;
    }
  }

  const remainingOnlyBishops = remainingPieces.every(
    (piece) => piece.type == PieceType.bishop
  );
  if (remainingOnlyBishops) {
    const bishopsSquareColors = remainingPieces.map((piece) => {
      const { row, col } = getRowColByPosition(piece.position);

      return (row + col) % 2;
    });
    const isSameSquareColor =
      bishopsSquareColors.every((color) => color === 0) ||
      bishopsSquareColors.every((color) => color === 1);

    if (isSameSquareColor) {
      console.log('log3');
      return DrawType.insufficientMaterial;
    }
  }

  // Check for stalemate
  if (!hasPlayerMoves && !isCheck) {
    return DrawType.stalemate;
  }

  // Check for threefold repetition
  const currentPosition = boardPositionToString(boardPosition);
  if (countOccurrences(boardHistory, currentPosition) >= 3) {
    return DrawType.threefoldRepetition;
  }

  return null;
};
