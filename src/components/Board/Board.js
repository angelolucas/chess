import React, { useState } from "react";
import Piece from "../Piece";
import * as S from "./Board.style";

const COLUMNS = ["a", "b", "c", "d", "e", "f", "g", "h"];
const LINES = [1, 2, 3, 4, 5, 6, 7, 8];

const Board = () => {
  const [board, setBoard] = useState({
    selection: {
      column: undefined,
      line: undefined,
      piece: undefined,
    },
    pieces: {
      whiteQueenRook: {
        type: "white-rook",
        column: "a",
        line: 1,
      },
      whiteQueenKnight: {
        type: "white-knight",
        column: "b",
        line: 1,
      },
      whiteQueenBishop: {
        type: "white-bishop",
        column: "c",
        line: 1,
      },
      whiteQueen: {
        type: "white-queen",
        column: "d",
        line: 1,
      },
      whiteKing: {
        type: "white-king",
        column: "e",
        line: 1,
      },
      whiteKingBishop: {
        type: "white-bishop",
        column: "f",
        line: 1,
      },
      whiteKingKnight: {
        type: "white-knight",
        column: "g",
        line: 1,
      },
      whiteKingRook: {
        type: "white-rook",
        column: "h",
        line: 1,
      },
      whitePawn1: {
        type: "white-pawn",
        column: "a",
        line: 2,
      },
      whitePawn2: {
        type: "white-pawn",
        column: "b",
        line: 2,
      },
      whitePawn3: {
        type: "white-pawn",
        column: "c",
        line: 2,
      },
      whitePawn4: {
        type: "white-pawn",
        column: "d",
        line: 2,
      },
      whitePawn5: {
        type: "white-pawn",
        column: "e",
        line: 2,
      },
      whitePawn6: {
        type: "white-pawn",
        column: "f",
        line: 2,
      },
      whitePawn7: {
        type: "white-pawn",
        column: "g",
        line: 2,
      },
      whitePawn8: {
        type: "white-pawn",
        column: "h",
        line: 2,
      },
      blackQueenRook: {
        type: "black-rook",
        column: "a",
        line: 8,
      },
      blackQueenKnight: {
        type: "black-knight",
        column: "b",
        line: 8,
      },
      blackQueenBishop: {
        type: "black-bishop",
        column: "c",
        line: 8,
      },
      blackQueen: {
        type: "black-queen",
        column: "d",
        line: 8,
      },
      blackKing: {
        type: "black-king",
        column: "e",
        line: 8,
      },
      blackKingBishop: {
        type: "black-bishop",
        column: "f",
        line: 8,
      },
      blackKingKnight: {
        type: "black-knight",
        column: "g",
        line: 8,
      },
      blackKingRook: {
        type: "black-rook",
        column: "h",
        line: 8,
      },
      blackPawn1: {
        type: "black-pawn",
        column: "a",
        line: 7,
      },
      blackPawn2: {
        type: "black-pawn",
        column: "b",
        line: 7,
      },
      blackPawn3: {
        type: "black-pawn",
        column: "c",
        line: 7,
      },
      blackPawn4: {
        type: "black-pawn",
        column: "d",
        line: 7,
      },
      blackPawn5: {
        type: "black-pawn",
        column: "e",
        line: 7,
      },
      blackPawn6: {
        type: "black-pawn",
        column: "f",
        line: 7,
      },
      blackPawn7: {
        type: "black-pawn",
        column: "g",
        line: 7,
      },
      blackPawn8: {
        type: "black-pawn",
        column: "h",
        line: 7,
      },
    },
  });

  const handleSelection = ({ column, line, piece }) => {
    console.log({ column, line });
    setBoard((prevState) => ({
      ...prevState,
      selection: { column, line, piece },
    }));
  };

  return (
    <>
      <S.Board>
        {COLUMNS.map((column) => (
          <S.Column key={column}>
            {LINES.sort((a, b) => b - a).map((line) => {
              const piece = Object.values(board.pieces).find(
                (piece) => piece.column === column && piece.line === line
              );
              const selected =
                column === board.selection.column &&
                line === board.selection.line;

              return (
                <S.Square
                  key={line}
                  tabIndex="-1"
                  onClick={() => handleSelection({ column, line, piece })}
                  selected={selected}
                >
                  {column}
                  {line}
                  {piece && <Piece type={piece.type} />}
                </S.Square>
              );
            })}
          </S.Column>
        ))}
      </S.Board>
      <p>
        square selected: {board.selection.column}
        {board.selection.line}
      </p>
      <p>piece selected: {board.selection.piece?.type}</p>
    </>
  );
};

export default Board;
