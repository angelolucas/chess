import { getPiece } from 'logics/getPiece';
import { getSquareByDirection } from 'logics/getSquareByDirection';
import getTarget from '../getTarget';

const castlingUnderAttack = ({
  rightSide,
  color,
  position: kingPosition,
  pieces,
}) => {
  // Verifica se rei ou as duas casas do rook está sob ataque;
  const sidePosition = getSquareByDirection({
    color,
    position: kingPosition,
    direction: rightSide ? 'right' : 'left',
  });
  const twoSidePosition = getSquareByDirection({
    color,
    position: kingPosition,
    direction: rightSide ? 'two-right' : 'two-left',
  });

  const castlingIsUnderAttack = pieces.find((piece) =>
    piece.moves?.forEach((move) =>
      [kingPosition, sidePosition, twoSidePosition].includes(move)
    )
  );

  /*console.log({
    castlingIsUnderAttack,
    positions: [kingPosition, sidePosition, twoSidePosition],
    pieces,
  });*/
  console.log('pieces:');
  console.log(pieces);
  console.log('window.pieces:');
  console.log(window.pieces);

  return !!castlingIsUnderAttack;
};

export default ({ piece: { color, position, moved }, pieces }) => {
  const directions = [
    'backward-left',
    'left',
    'forward-left',
    'backward',
    'forward',
    'backward-right',
    'right',
    'forward-right',
    'two-right',
    'two-left',
  ];

  return directions.reduce((squares, direction) => {
    const target = getTarget({
      direction,
      piece: { color, position },
      pieces,
      options: { underAttack: true },
    });

    if (target) {
      // Kingside castling
      if (direction === 'two-right') {
        // King can not have moved
        if (!moved) {
          const rook = getPiece({
            square: color === 'white' ? 81 : 88,
            pieces,
          });

          // Kingside rook can not have moved
          if (rook && !rook.moved) {
            const castlingIsUnderAttack = castlingUnderAttack({
              rightSide: true,
              color,
              position,
              pieces,
            });

            // No castle square should be under attack
            if (castlingIsUnderAttack) {
              squares.push(target.square);
            }
          }
        }
      }

      // Queenside castling
      else if (direction === 'two-left') {
        // King can not have moved
        if (!moved) {
          const rook = getPiece({
            square: color === 'white' ? 11 : 18,
            pieces,
          });
          if (rook && !rook.moved) {
            squares.push(target.square);
          }
        }
      }

      // Normal move
      else if (target.empty || target.enemy) {
        squares.push(target.square);
      }
    }

    return squares;
  }, []);
};
