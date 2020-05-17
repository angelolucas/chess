import { RANKS } from '../constants';
import { getLegalMovesBySquares } from '../utils';

export default ({ selected, pieces }) => {
  const player = selected.piece.player;
  const file = selected.file;
  const squares = RANKS.slice(selected.rank).map((rank) => ({ file, rank }));

  return getLegalMovesBySquares({ player, squares, pieces });
};
