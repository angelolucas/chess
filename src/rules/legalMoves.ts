import { Move, Piece, PieceType, Player } from '@/types/app.types';
import { pawnMoves } from './pieceMoves/pawnMoves';
import { kingMoves } from './pieceMoves/kingMoves';
import { knightMoves } from './pieceMoves/knightMoves';
import { rookMoves } from './pieceMoves/rookMoves';
import { queenMoves } from './pieceMoves/queenMoves';
import { bishopMoves } from './pieceMoves/bishopMoves';

interface LegalMoves {
  player: Player;
  piece: Piece;
  boardPosition: Piece[];
  lastMove?: {
    piece: Piece;
    move: Move;
  };
}

export const legalMoves = ({
  player,
  piece,
  boardPosition,
  lastMove,
}: LegalMoves) => {
  let moves: Move[] = [];

  if (piece.player !== player) {
    return moves;
  }

  if (piece.type === PieceType.pawn) {
    moves = pawnMoves({ piece, boardPosition, lastMove });
  }

  if (piece.type === PieceType.rook) {
    moves = rookMoves({ piece, boardPosition });
  }

  if (piece.type === PieceType.knight) {
    moves = knightMoves({ piece, boardPosition });
  }

  if (piece.type === PieceType.queen) {
    moves = queenMoves({ piece, boardPosition });
  }

  if (piece.type === PieceType.bishop) {
    moves = bishopMoves({ piece, boardPosition });
  }

  if (piece.type === PieceType.king) {
    moves = kingMoves({ piece, boardPosition });
  }

  return moves;
};
