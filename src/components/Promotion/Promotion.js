import React from 'react';
import PropTypes from 'prop-types';
import Piece from 'components/Piece';
import * as S from './Promotion.style';

const Promotion = ({ file, player, onClick, ...props }) => {
  const position = (order) => {
    const white = player === 'white';
    const rank = {
      0: white ? 8 : 1,
      1: white ? 7 : 2,
      2: white ? 6 : 3,
      3: white ? 5 : 4,
    }[order];

    return parseInt(`${file}${rank}`);
  };

  return (
    <S.Promotion {...props}>
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
  file: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]).isRequired,
  player: PropTypes.oneOf(['white', 'black']).isRequired,
  onClick: PropTypes.func,
};

export default Promotion;
