import React from 'react';
import { ReactComponent as Squares } from 'assets/board.svg';
import * as S from './Board.style';
import theme from 'theme';

const Board = ({ children, rotate, ...props }) => (
  <S.Board rotate={rotate} {...props}>
    <Squares fill={theme.color.dark} />
    {children}
  </S.Board>
);

export default Board;
