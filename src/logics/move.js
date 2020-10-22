import legalMoves from 'logics/legalMoves';

export default ({ move, pieces, player, promotionPiece }) => {
  let newMap = pieces;

  // Remove taked piece
  newMap = newMap.filter((piece) => piece.position !== move.to);

  // Move pieces
  newMap = newMap.map((piece) => {
    if (piece.position === move.from) {
      return {
        ...piece,
        moved: true,
        position: move.to,
      };
    }

    return piece;
  });

  // Promotion
  if (promotionPiece) {
    newMap = newMap.map((piece) => {
      if (piece.position === move.to) {
        return {
          ...piece,
          type: promotionPiece,
        };
      }

      return piece;
    });
  }

  // Update legal moves
  newMap = newMap.map((piece) => ({
    ...piece,
    legalMoves: legalMoves({
      piece,
      player,
      pieces: newMap,
    }),
  }));

  return newMap;
};
