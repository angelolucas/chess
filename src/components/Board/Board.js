import React from "react";
import { ReactComponent as WhitePawn } from "../../assets/white-pawn.svg";
import { ReactComponent as WhiteRook } from "../../assets/white-rook.svg";
import { ReactComponent as WhiteKnight } from "../../assets/white-knight.svg";
import { ReactComponent as WhiteBishop } from "../../assets/white-bishop.svg";
import { ReactComponent as WhiteQueen } from "../../assets/white-queen.svg";
import { ReactComponent as WhiteKing } from "../../assets/white-king.svg";
import { ReactComponent as BlackPawn } from "../../assets/black-pawn.svg";
import { ReactComponent as BlackRook } from "../../assets/black-rook.svg";
import { ReactComponent as BlackKnight } from "../../assets/black-knight.svg";
import { ReactComponent as BlackBishop } from "../../assets/black-bishop.svg";
import { ReactComponent as BlackQueen } from "../../assets/black-queen.svg";
import { ReactComponent as BlackKing } from "../../assets/black-king.svg";

import * as S from "./Board.style";

const COLUMNS = ["a", "b", "c", "d", "e", "f", "g", "h"];
const LINES = [1, 2, 3, 4, 5, 6, 7, 8];

const pieces = {
  whiteQueenRook: {
    image: WhiteRook,
    column: "a",
    line: 1,
  },
  whiteQueenKnight: {
    image: WhiteKnight,
    column: "b",
    line: 1,
  },
  whiteQueenBishop: {
    image: WhiteBishop,
    column: "c",
    line: 1,
  },
  whiteQueen: {
    image: WhiteQueen,
    column: "d",
    line: 1,
  },
  whiteKing: {
    image: WhiteKing,
    column: "e",
    line: 1,
  },
  whiteKingBishop: {
    image: WhiteBishop,
    column: "f",
    line: 1,
  },
  whiteKingKnight: {
    image: WhiteKnight,
    column: "g",
    line: 1,
  },
  whiteKingRook: {
    image: WhiteRook,
    column: "h",
    line: 1,
  },
  whitePawn1: {
    image: WhitePawn,
    column: "a",
    line: 2,
  },
  whitePawn2: {
    image: WhitePawn,
    column: "b",
    line: 2,
  },
  whitePawn3: {
    image: WhitePawn,
    column: "c",
    line: 2,
  },
  whitePawn4: {
    image: WhitePawn,
    column: "d",
    line: 2,
  },
  whitePawn5: {
    image: WhitePawn,
    column: "e",
    line: 2,
  },
  whitePawn6: {
    image: WhitePawn,
    column: "f",
    line: 2,
  },
  whitePawn7: {
    image: WhitePawn,
    column: "g",
    line: 2,
  },
  whitePawn8: {
    image: WhitePawn,
    column: "h",
    line: 2,
  },
  blackQueenRook: {
    image: BlackRook,
    column: "a",
    line: 8,
  },
  blackQueenKnight: {
    image: BlackKnight,
    column: "b",
    line: 8,
  },
  blackQueenBishop: {
    image: BlackBishop,
    column: "c",
    line: 8,
  },
  blackQueen: {
    image: BlackQueen,
    column: "d",
    line: 8,
  },
  blackKing: {
    image: BlackKing,
    column: "e",
    line: 8,
  },
  blackKingBishop: {
    image: BlackBishop,
    column: "f",
    line: 8,
  },
  blackKingKnight: {
    image: BlackKnight,
    column: "g",
    line: 8,
  },
  blackKingRook: {
    image: BlackRook,
    column: "h",
    line: 8,
  },
  blackPawn1: {
    image: BlackPawn,
    column: "a",
    line: 7,
  },
  blackPawn2: {
    image: BlackPawn,
    column: "b",
    line: 7,
  },
  blackPawn3: {
    image: BlackPawn,
    column: "c",
    line: 7,
  },
  blackPawn4: {
    image: BlackPawn,
    column: "d",
    line: 7,
  },
  blackPawn5: {
    image: BlackPawn,
    column: "e",
    line: 7,
  },
  blackPawn6: {
    image: BlackPawn,
    column: "f",
    line: 7,
  },
  blackPawn7: {
    image: BlackPawn,
    column: "g",
    line: 7,
  },
  blackPawn8: {
    image: BlackPawn,
    column: "h",
    line: 7,
  },
};

const Board = () => {
  return (
    <>
      <S.Board>
        {COLUMNS.map((column) => (
          <S.Column key={column}>
            {LINES.sort((a, b) => b - a).map((line) => {
              const piecee = Object.values(pieces).find(
                (piece) => piece.column === column && piece.line === line
              );
              return (
                <S.Square key={line}>
                  {column}/{line}
                  {piecee && <piecee.image tabIndex="-1" />}
                </S.Square>
              );
            })}
          </S.Column>
        ))}
      </S.Board>
      <WhiteRook />
      <p>
        A torre branca da rainha está em{" "}
        <strong>
          {pieces.whiteQueenRook.column}/{pieces.whiteQueenRook.line}
        </strong>
      </p>
      <p>
        A torre branca do rei está em{" "}
        <strong>
          {pieces.whiteKingRook.column}/{pieces.whiteKingRook.line}
        </strong>
      </p>
    </>
  );
};

export default Board;
