import rook from './rook';
import bishop from './bishop';

export default ({ selected, pieces }) => {
  let legalMoves = [];

  // Rook
  if (['rook', 'queen'].includes(selected.piece.type)) {
    legalMoves = [...legalMoves, ...rook({ selected, pieces })];
  }
  if (['bishop', 'queen'].includes(selected.piece.type)) {
    legalMoves = [...legalMoves, ...bishop({ selected, pieces })];
  }

  return legalMoves;
};
