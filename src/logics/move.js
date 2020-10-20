import legalMoves from 'logics/legalMoves';

export default ({ moves, pieces, player }) => {
  const withoutTakedPiece = pieces.filter((piece) => {
    for (const move of moves) {
      if (piece.position === move.to) return false;
    }
    return true;
  });

  const withMovedPiece = withoutTakedPiece.map((piece) => {
    for (const move of moves) {
      if (piece.position === move.from) {
        return {
          ...piece,
          moved: true,
          position: move.to,
        };
      }
    }

    return piece;
  });

  const withLegalMoves = withMovedPiece.map((piece) => ({
    ...piece,
    legalMoves: legalMoves({
      piece,
      player,
      pieces: withMovedPiece,
    }),
  }));

  return withLegalMoves;
};
