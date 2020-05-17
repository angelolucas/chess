import rook from './rook';

export default ({ selected, pieces }) => {
  let legalMoves = [];

  // Rook
  if (['rook', 'queen'].includes(selected.piece.type)) {
    legalMoves = [...legalMoves, ...rook({ selected, pieces })];
  }

  return legalMoves;
};
