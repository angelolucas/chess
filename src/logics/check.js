export default ({ pieces, player }) => {
  const king = pieces.find(
    (piece) => piece.player === player && piece.type === 'king'
  );
  const check = pieces.find((piece) => piece.legalMoves.includes(king.square));

  return check ? true : false;
};
