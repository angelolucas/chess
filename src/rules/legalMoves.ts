import { Move, Piece, PieceType } from '@/types/app.types';
import { pawnMoves } from './pieceMoves/pawnMoves';
import { kingMoves } from './pieceMoves/kingMoves';

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

  if (piece.type === PieceType.pawn) {
    moves = pawnMoves({ piece, boardPosition, lastMove });
  }

  if (piece.type === PieceType.king) {
    moves = kingMoves({ piece, boardPosition });
  }

  return moves;
};
