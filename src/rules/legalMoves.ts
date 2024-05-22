import { Piece } from '@/types/app.types';
import { pawnMoves } from './pieceMoves/pawnMoves';

interface LegalMoves {
  piece: Piece;
  boardPosition: Piece[];
}

export const legalMoves = ({ piece, boardPosition }: LegalMoves) => {
  let moves: number[] = [];

  if (piece.type === 'pawn') moves = pawnMoves({ piece, boardPosition });

  return moves;
};
