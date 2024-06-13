import { Move, Piece, PieceType, Player } from '@/types/app.types';
import { pawnMoves } from './pieceMoves/pawnMoves';
import { kingMoves } from './pieceMoves/kingMoves';
import { knightMoves } from './pieceMoves/knightMoves';
import { rookMoves } from './pieceMoves/rookMoves';
import { queenMoves } from './pieceMoves/queenMoves';
import { bishopMoves } from './pieceMoves/bishopMoves';
import { verifyCheck } from './verifyCheck';
import { newBoardPosition } from './newBoardPosition';

interface LegalMoves {
  player: Player;
  piece: Piece;
  boardPosition: Piece[];
  lastMove?: {
    piece: Piece;
    move: Move;
  };
  shadowMove?: boolean;
}

export const legalMoves = ({
  player,
  piece,
  boardPosition,
  lastMove,
  shadowMove,
}: LegalMoves) => {
  let moves: Move[] = [];

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
    moves = kingMoves({ piece, boardPosition, player });
  }

  /*
   * Filters out moves that would leave the opponent's king in check. Specifically:
   * 1. Prevents the king from moving to squares that are under attack.
   * 2. Eliminates moves that would exposing the king to check (piece pinned).
   * 3. Removes any moves other than those that would get the king out of check.
   * 4. Prevents castling when the king's squares are under attack
   */
  if (!shadowMove && player !== piece.player) {
    moves = moves.filter((legalMove) => {
      return !verifyCheck({
        player: player === Player.white ? Player.black : Player.white,
        boardPosition: newBoardPosition({
          player,
          piece,
          move: legalMove,
          boardPosition,
          shadowMove: true,
        }),
      });
    });
  }

  return moves;
};
