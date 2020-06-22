import React from 'react';
import * as S from './Board.style';

const Board = ({ children, ...props }) => (
  <S.Board {...props}>{children}</S.Board>
);

export default Board;
