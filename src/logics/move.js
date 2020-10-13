import legalMoves from 'logics/legalMoves';

export default ({ from, to, pieces }) => {
  const withoutTakedPiece = pieces.filter((piece) => piece.position !== to);

  const withMovedPiece = withoutTakedPiece.map((piece) => {
    if (piece.position === from) {
      return {
        ...piece,
        moved: true,
        position: to,
      };
    } else {
      return piece;
    }
  });

  const withLegalMoves = withMovedPiece.map((piece) => ({
    ...piece,
    legalMoves: legalMoves({ piece, pieces: withMovedPiece }),
  }));

  return withLegalMoves;
};
