import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Squares } from 'assets/board.svg';
import { ReactComponent as Coordinates } from 'assets/coordinates.svg';
import * as S from './Board.style';
import theme from 'theme';

const Board = ({ children, rotate, ...props }) => (
  <S.Board rotate={rotate} {...props}>
    <Squares fill={theme.color.dark} />
    <S.Coordinates as={Coordinates} />
    {children}
  </S.Board>
);

Board.propTypes = {
  children: PropTypes.node,
  rotate: PropTypes.bool,
};

export default Board;
