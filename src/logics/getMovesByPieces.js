import getPosition from 'logics/getPosition';
import check from 'logics/check';
import queen from './moves/queen';
import rook from './moves/rook';
import bishop from './moves/bishop';
import knight from './moves/knight';
import king from './moves/king';
import pawn from './moves/pawn';

export default ({ piece, pieces, player }) => {
  let moves = [];

  if (piece.type === 'queen') moves = queen({ piece, pieces });
  if (piece.type === 'rook') moves = rook({ piece, pieces });
  if (piece.type === 'bishop') moves = bishop({ piece, pieces });
  if (piece.type === 'knight') moves = knight({ piece, pieces });
  if (piece.type === 'pawn') moves = pawn({ piece, pieces });
  if (piece.type === 'king') moves = king({ piece, pieces });

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
          pieces: getPosition({
            origin: piece.position,
            target: legalMove,
            pieces,
          }),
        })
    );
  }

  return moves;
};
