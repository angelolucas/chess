import move from 'logics/move';
import check from 'logics/check';
//import longRangePiece from './longRangePiece';
import knight from './knight';
import king from './king';
//import pawn from './pawn';

export default ({ piece, pieces, player }) => {
  let moves = [];

  if (['rook', 'bishop', 'queen'].includes(piece.type)) {
    //moves = longRangePiece({ piece, pieces });
  }
  if (piece.type === 'knight') {
    moves = knight({ piece, pieces });
  }
  if (piece.type === 'king') {
    moves = king({ piece, pieces });
  }
  if (piece.type === 'pawn') {
    //moves = pawn({ piece, pieces });
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
