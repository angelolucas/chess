import React from 'react';
import PropTypes from 'prop-types';
import Piece from 'components/Piece';
import * as S from './Promotion.style';

const Promotion = ({ square, onClick, onClose, ...props }) => {
  const [file, rank] = [...square.toString()].map(Number);
  const player = rank === 8 ? 'white' : 'black';
  const position = (order) => {
    const rank = {
      0: player === 'white' ? 8 : 1,
      1: player === 'white' ? 7 : 2,
      2: player === 'white' ? 6 : 3,
      3: player === 'white' ? 5 : 4,
    }[order];

    return parseInt(`${file}${rank}`);
  };

  return (
    <S.Promotion {...props} onClick={onClose}>
      {['queen', 'knight', 'rook', 'bishop'].map((piece, order) => {
        return (
          <Piece
            player={player}
            piece={piece}
            position={position(order)}
            promotion
            onClick={() => onClick(piece)}
            key={order}
          />
        );
      })}
    </S.Promotion>
  );
};

Promotion.propTypes = {
  square: PropTypes.oneOf([
    11,
    21,
    31,
    41,
    51,
    61,
    71,
    81,
    18,
    28,
    38,
    48,
    58,
    68,
    78,
    88,
  ]).isRequired,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default Promotion;
