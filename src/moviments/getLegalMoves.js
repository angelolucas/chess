import longRangePiece from './longRangePiece';
import knight from './knight';
import king from './king';
import pawn from './pawn';

export default ({ piece, pieces }) => {
  if (['rook', 'bishop', 'queen'].includes(piece.type)) {
    return longRangePiece({ piece, pieces });
  }
  if (piece.type === 'knight') {
    return knight({ piece, pieces });
  }
  if (piece.type === 'king') {
    return king({ piece, pieces });
  }
  if (piece.type === 'pawn') {
    return pawn({ piece, pieces });
  }
  return null;
};
