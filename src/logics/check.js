export default ({ pieces, player }) => {
  const king = pieces.find(
    (piece) => piece.color === player && piece.type === 'king'
  );
  const check = pieces.find((piece) => piece.moves.includes(king.position));

  return check ? true : false;
};
