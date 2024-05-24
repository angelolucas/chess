import { Piece } from '@/types/app.types';
import { pawnMoves } from './pieceMoves/pawnMoves';

interface LegalMoves {
  piece: Piece;
  boardPosition: Piece[];
  lastMove?: {
    piece: Piece;
    move: number;
  };
}

export const legalMoves = ({ piece, boardPosition, lastMove }: LegalMoves) => {
  let moves: number[] = [];

  if (piece.type === 'pawn') {
    moves = pawnMoves({ piece, boardPosition, lastMove });
  }

  return moves;
};
