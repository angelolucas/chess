import { Move, Piece } from '@/types/app.types';
import { pawnMoves } from './pieceMoves/pawnMoves';

interface LegalMoves {
  piece: Piece;
  boardPosition: Piece[];
  lastMove?: {
    piece: Piece;
    move: Move;
  };
}

export const legalMoves = ({ piece, boardPosition, lastMove }: LegalMoves) => {
  let moves: Move[] = [];

  if (piece.type === 'pawn') {
    moves = pawnMoves({ piece, boardPosition, lastMove });
  }

  return moves;
};
