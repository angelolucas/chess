import move from 'logics/move';
import check from 'logics/check';
import longRangePiece from './longRangePiece';
import knight from './knight';
import king from './king';
import pawn from './pawn';

export default ({ piece, pieces, player }) => {
  let moves = [];

  if (['rook', 'bishop', 'queen'].includes(piece.type)) {
    moves = longRangePiece({ piece, pieces });
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

  // Remove moves that leave the king in check
  if (player && player !== piece.player) {
    moves = moves.filter(
      (legalMove) =>
        !check({
          player: player === 'white' ? 'black' : 'white',
          pieces: move({
            moves: [{ from: piece.position, to: legalMove }],
            pieces,
          }),
        })
    );
  }

  return moves;
};
