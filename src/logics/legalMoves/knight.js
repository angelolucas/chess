import squareStatus from '../squareStatus';

export default ({ piece: { position, color }, pieces }) => {
  let moves = [
    position - 21, // two-left-backward
    position - 19, // two-left-forward
    position - 12, // two-backward-left
    position - 8, // two-forward-left
    position + 8, // two-backward-right
    position + 12, // two-forward-right
    position + 19, // two-right-backward
    position + 21, // two-right-forwad
  ];

  moves = moves.filter((square) => {
    square = squareStatus({ square, player: color, pieces });

    return square.empty || square.enemy;
  });

  return moves;
};
