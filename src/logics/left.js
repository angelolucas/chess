import { FILES } from '../constants';
import { getLegalMovesBySquares } from '../utils';

export default ({ selected, pieces }) => {
  const player = selected.piece.player;
  const position = FILES.indexOf(selected.file);
  const rank = selected.rank;
  const squares = FILES.slice(0, position)
    .reverse()
    .map((file) => ({ file, rank }));

  return getLegalMovesBySquares({ player, squares, pieces });
};
