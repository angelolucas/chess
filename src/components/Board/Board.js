import React from 'react';
import { ReactComponent as Squares } from 'assets/board.svg';
import * as S from './Board.style';
import theme from 'theme';

const Board = ({ children, ...props }) => (
  <S.Board {...props}>
    <Squares fill={theme.color.dark} />
    {children}
  </S.Board>
);

export default Board;
