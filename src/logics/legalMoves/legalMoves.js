import longRangePiece from './longRangePiece';
import knight from './knight';
import king from './king';
import pawn from './pawn';

export default ({ player, piece, pieces }) => {
  let moves = [];

  if (player !== piece.player) return moves;

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

  return moves;
};
