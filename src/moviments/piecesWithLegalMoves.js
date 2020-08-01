import longRangePiece from './longRangePiece';
import knight from './knight';
import king from './king';

const getLegalMoves = ({ piece, pieces }) => {
  if (['rook', 'bishop', 'queen'].includes(piece.type)) {
    return longRangePiece({ piece, pieces });
  }
  if (piece.type === 'knight') {
    return knight({ piece, pieces });
  }
  if (piece.type === 'king') {
    return king({ piece, pieces });
  }
  return null;
};

export default (pieces) =>
  pieces.map((piece) => ({
    ...piece,
    legalMoves: getLegalMoves({ piece, pieces }),
  }));
