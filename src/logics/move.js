import moves from 'logics/moves';

export default ({ origin, target, pieces, player, promotionPiece }) => {
  let newMap = pieces;

  // Remove taked piece
  newMap = newMap.filter((piece) => piece.position !== target);

  // Move pieces
  newMap = newMap.map((piece) => {
    if (piece.position === origin) {
      return {
        ...piece,
        moved: true,
        position: target,
      };
    }

    return piece;
  });

  // Promotion
  if (promotionPiece) {
    newMap = newMap.map((piece) => {
      if (piece.position === target) {
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
    moves: moves({
      piece,
      player,
      pieces: newMap,
    }),
  }));

  return newMap;
};
