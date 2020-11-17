import move from 'logics/move';
import check from 'logics/check';
import queen from './queen';
import rook from './rook';
import bishop from './bishop';
import knight from './knight';
import king from './king';
import pawn from './pawn';

export default ({ piece, pieces, player }) => {
  let moves = [];

  moves = {
    queen: queen({ piece, pieces }),
    rook: rook({ piece, pieces }),
    bishop: bishop({ piece, pieces }),
    knight: knight({ piece, pieces }),
    pawn: pawn({ piece, pieces }),
    king: king({ piece, pieces }),
  }[piece.type];

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
