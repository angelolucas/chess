export default ({ piece, pieces }) => {
  console.log({ piece, pieces });

  return [[piece.square[0] + 1, piece.square[1] + 1]];
};
