import legalMoves from 'logics/legalMoves';

export default ({ moves, pieces, player }) => {
  let newMap = pieces;

  // Remove taked piece
  newMap = newMap.filter((piece) => {
    for (const move of moves) {
      if (piece.position === move.to) return false;
    }
    return true;
  });

  // Move pieces
  newMap = newMap.map((piece) => {
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
