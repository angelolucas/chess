import rook from './rook';
import bishop from './bishop';

export default ({ player, selected, pieces }) => {
  let legalMoves = [];

  // Rook
  if (['rook', 'queen'].includes(pieces[selected.pieceId].type)) {
    legalMoves = [...legalMoves, ...rook({ player, selected, pieces })];
  }
  if (['bishop', 'queen'].includes(pieces[selected.pieceId].type)) {
    legalMoves = [...legalMoves, ...bishop({ player, selected, pieces })];
  }

  return legalMoves;
};
