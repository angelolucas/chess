export default ({ file, rank, pieces }) => Object.values(pieces).find(
    (piece) => piece.file === file && piece.rank === rank
  );