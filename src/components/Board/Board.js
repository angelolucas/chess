import React from 'react';
import { ReactComponent as Squares } from 'assets/board.svg';
import * as S from './Board.style';

const Board = ({ children, ...props }) => (
  <S.Board {...props}>
    <Squares />
    {children}
  </S.Board>
);

export default Board;
