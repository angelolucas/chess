import React from "react";
import * as S from "./Board.style";

const COLUMNS = ["a", "b", "c", "d", "e", "f", "g", "h"];
const LINES = [1, 2, 3, 4, 5, 6, 7, 8];

const Board = () => (
  <S.Board>
    {COLUMNS.map((column) => (
      <S.Column key={column}>
        {LINES.sort((a, b) => b - a).map((line) => (
          <S.Square key={line}>
            {column}/{line}
          </S.Square>
        ))}
      </S.Column>
    ))}
  </S.Board>
);

export default Board;
