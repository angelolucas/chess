import { RANKS } from '../constants';
import { getPieceBySquare } from '../utils';

export default ({ selected, pieces }) => {
  const ranks = RANKS.slice(selected.rank);
  const file = selected.file

  return ranks.map(rank => {
    return { file, rank }
  })
};
