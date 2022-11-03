import getMovesByPiece from 'logics/moves';

export default ({ origin, target, pieces, player, promotionPiece }) => {
  let newPosition = pieces;

  // Remove taked piece
  newPosition = newPosition.filter((piece) => piece.position !== target);

  // Move pieces
  newPosition = newPosition.map((piece) => {
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
    newPosition = newPosition.map((piece) => {
      if (piece.position === target) {
        return {
          ...piece,
          type: promotionPiece,
        };
      }

      return piece;
    });
  }

  /*
   * Updates the moves of all pieces except the king
   * The king needs the movement of all pieces to know whether or
   * not it can occupy a square that is not under attack by the enemy
   * For this reason, the king's movement is updated last, on the map below
   */
  newPosition = newPosition.map((piece) => {
    if (piece.type !== 'king') {
      return {
        ...piece,
        moves: getMovesByPiece({
          piece,
          player,
          pieces: newPosition,
        }),
      };
    }
    return piece;
  });

  // Update king move
  newPosition = newPosition.map((piece) => {
    if (piece.type === 'king') {
      return {
        ...piece,
        moves: getMovesByPiece({
          piece,
          player,
          pieces: newPosition,
        }),
      };
    }
    return piece;
  });

  return newPosition;
};
