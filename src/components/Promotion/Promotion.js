import React from 'react';
import PropTypes from 'prop-types';
import Piece from 'components/Piece';
import * as S from './Promotion.style';

const Promotion = ({ square, onClick, onClose, ...props }) => {
  const [file, rank] = [...square.toString()].map(Number);
  const color = rank === 8 ? 'white' : 'black';
  const position = (order) => {
    const rank = {
      0: color === 'white' ? 8 : 1,
      1: color === 'white' ? 7 : 2,
      2: color === 'white' ? 6 : 3,
      3: color === 'white' ? 5 : 4,
    }[order];

    return parseInt(`${file}${rank}`);
  };

  return (
    <S.Promotion {...props} onClick={onClose}>
      {['queen', 'knight', 'rook', 'bishop'].map((pieceType, order) => {
        return (
          <Piece
            color={color}
            type={pieceType}
            position={position(order)}
            promotion
            onClick={() => onClick(pieceType)}
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
