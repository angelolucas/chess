import legalMoves from 'logics/legalMoves';

export default ({ moves, pieces, player, promotionPiece }) => {
  let newMap = pieces;

  // Remove taked piece
  newMap = newMap.filter((piece) => {
    for (const move of moves) {
      if (move.target === piece.position) return false;
    }
    return true;
  });

  // Move pieces
  newMap = newMap.map((piece) => {
    for (const move of moves) {
      if (move.piece.position === piece.position) {
        return {
          ...piece,
          moved: true,
          position: move.target,
        };
      }
    }

    return piece;
  });

  // Promotion
  if (promotionPiece) {
    newMap = newMap.map((piece) => {
      if (piece.position === moves[0].target) {
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
