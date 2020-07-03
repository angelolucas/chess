import longRangePiece from './longRangePiece';

const getLegalMoves = ({ piece, pieces }) => {
  if (['rook', 'bishop', 'queen'].includes(piece.type)) {
    return longRangePiece({ piece, pieces });
  }
  return null;
};

export default (pieces) =>
  pieces.map((piece) => ({
    ...piece,
    legalMoves: getLegalMoves({ piece, pieces }),
  }));
