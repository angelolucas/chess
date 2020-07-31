import longRangePiece from './longRangePiece';
import knight from './knight';

const getLegalMoves = ({ piece, pieces }) => {
  if (['rook', 'bishop', 'queen'].includes(piece.type)) {
    return longRangePiece({ piece, pieces });
  }
  if (piece.type === 'knight') {
    return knight({ piece, pieces });
  }
  return null;
};

export default (pieces) =>
  pieces.map((piece) => ({
    ...piece,
    legalMoves: getLegalMoves({ piece, pieces }),
  }));
