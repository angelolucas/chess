import move from 'logics/move';
import check from 'logics/check';

/*
 * Removes the opponent's moves that leave their king in check. That is:
 * 1 - Prevent the king's moves to squares under attack
 * 2 - Pin pieces
 */

export default ({ moves, piece: { color, position }, pieces, player }) => {
  if (player && player !== color) {
    return moves.filter(
      (square) =>
        !check({
          player: player === 'white' ? 'black' : 'white',
          pieces: move({
            origin: position,
            target: square,
            pieces,
          }),
        })
    );
  }

  return moves;
};
