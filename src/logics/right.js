import { FILES } from '../constants';
import { getLegalMovesBySquares } from '../utils';

export default ({ selected, pieces }) => {
  const player = selected.piece.player;
  const position = FILES.indexOf(selected.file) + 1;
  const rank = selected.rank;
  const squares = FILES.slice(position).map((file) => ({ file, rank }));

  return getLegalMovesBySquares({ player, squares, pieces });
};
