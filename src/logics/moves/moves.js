import move from 'logics/move';
import check from 'logics/check';
import rook from './rook';
import queen from './queen';
import bishop from './bishop';
import knight from './knight';
import king from './king';
import pawn from './pawn';

export default ({ piece, pieces, player }) => {
  let moves = [];

  if (piece.type === 'rook') {
    moves = rook({ piece, pieces });
  }
  if (piece.type === 'queen') {
    moves = queen({ piece, pieces });
  }
  if (piece.type === 'bishop') {
    moves = bishop({ piece, pieces });
  }
  if (piece.type === 'knight') {
    moves = knight({ piece, pieces });
  }
  if (piece.type === 'king') {
    moves = king({ piece, pieces });
  }
  if (piece.type === 'pawn') {
    moves = pawn({ piece, pieces });
  }

  /*
   * Removes the opponent's moves that leave their king in check. That is:
   * 1 - Prevent the king's moves to squares under attack
   * 2 - Pin pieces
   */
  if (player && player !== piece.color) {
    moves = moves.filter(
      (legalMove) =>
        !check({
          player: player === 'white' ? 'black' : 'white',
          pieces: move({
            origin: piece.position,
            target: legalMove,
            pieces,
          }),
        })
    );
  }

  return moves;
};
