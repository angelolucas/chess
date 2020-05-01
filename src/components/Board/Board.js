import React, { useState } from "react";
import Piece from "../Piece";
import * as S from "./Board.style";

const COLUMNS = ["a", "b", "c", "d", "e", "f", "g", "h"];
const LINES = [8, 7, 6, 5, 4, 3, 2, 1];

const Board = () => {
  const [board, setBoard] = useState({
    selected: {
      column: undefined,
      line: undefined,
      piece: undefined,
    },
    pieces: {
      "white-queen-rook": {
        id: "white-queen-rook",
        type: "white-rook",
        column: "a",
        line: 1,
      },
      "white-queen-knight": {
        id: "white-queen-knight",
        type: "white-knight",
        column: "b",
        line: 1,
      },
      "white-queen-bishop": {
        id: "white-queen-bishop",
        type: "white-bishop",
        column: "c",
        line: 1,
      },
      "white-queen": {
        id: "white-queen",
        type: "white-queen",
        column: "d",
        line: 1,
      },
      "white-king": {
        id: "white-king",
        type: "white-king",
        column: "e",
        line: 1,
      },
      "white-king-bishop": {
        id: "white-king-bishop",
        type: "white-bishop",
        column: "f",
        line: 1,
      },
      "white-king-knight": {
        id: "white-king-knight",
        type: "white-knight",
        column: "g",
        line: 1,
      },
      "white-king-rook": {
        id: "white-king-rook",
        type: "white-rook",
        column: "h",
        line: 1,
      },
      "white-pawn1": {
        id: "white-pawn1",
        type: "white-pawn",
        column: "a",
        line: 2,
      },
      "white-pawn2": {
        id: "white-pawn2",
        type: "white-pawn",
        column: "b",
        line: 2,
      },
      "white-pawn3": {
        id: "white-pawn3",
        type: "white-pawn",
        column: "c",
        line: 2,
      },
      "white-pawn4": {
        id: "white-pawn4",
        type: "white-pawn",
        column: "d",
        line: 2,
      },
      "white-pawn5": {
        id: "white-pawn5",
        type: "white-pawn",
        column: "e",
        line: 2,
      },
      "white-pawn6": {
        id: "white-pawn6",
        type: "white-pawn",
        column: "f",
        line: 2,
      },
      "white-pawn7": {
        id: "white-pawn7",
        type: "white-pawn",
        column: "g",
        line: 2,
      },
      "white-pawn8": {
        id: "white-pawn8",
        type: "white-pawn",
        column: "h",
        line: 2,
      },
      "black-queen-rook": {
        id: "black-queen-rook",
        type: "black-rook",
        column: "a",
        line: 8,
      },
      "black-queen-knight": {
        id: "black-queen-knight",
        type: "black-knight",
        column: "b",
        line: 8,
      },
      "black-queen-bishop": {
        id: "black-queen-bishop",
        type: "black-bishop",
        column: "c",
        line: 8,
      },
      "black-queen": {
        id: "black-queen",
        type: "black-queen",
        column: "d",
        line: 8,
      },
      "black-king": {
        id: "black-king",
        type: "black-king",
        column: "e",
        line: 8,
      },
      "black-king-bishop": {
        id: "black-king-bishop",
        type: "black-bishop",
        column: "f",
        line: 8,
      },
      "black-king-knight": {
        id: "black-king-knight",
        type: "black-knight",
        column: "g",
        line: 8,
      },
      "black-king-rook": {
        id: "black-king-rook",
        type: "black-rook",
        column: "h",
        line: 8,
      },
      "black-pawn1": {
        id: "black-pawn1",
        type: "black-pawn",
        column: "a",
        line: 7,
      },
      "black-pawn2": {
        id: "black-pawn2",
        type: "black-pawn",
        column: "b",
        line: 7,
      },
      "black-pawn3": {
        id: "black-pawn3",
        type: "black-pawn",
        column: "c",
        line: 7,
      },
      "black-pawn4": {
        id: "black-pawn4",
        type: "black-pawn",
        column: "d",
        line: 7,
      },
      "black-pawn5": {
        id: "black-pawn5",
        type: "black-pawn",
        column: "e",
        line: 7,
      },
      "black-pawn6": {
        id: "black-pawn6",
        type: "black-pawn",
        column: "f",
        line: 7,
      },
      "black-pawn7": {
        id: "black-pawn7",
        type: "black-pawn",
        column: "g",
        line: 7,
      },
      "black-pawn8": {
        id: "black-pawn8",
        type: "black-pawn",
        column: "h",
        line: 7,
      },
    },
  });

  const handleSelection = ({ column, line, piece }) => {
    if (board.selected.piece && !piece) {
      setBoard({
        ...board,
        pieces: {
          ...board.pieces,
          [board.selected.piece.id]: {
            ...board.pieces[board.selected.piece.id],
            column,
            line,
          },
        },
        selected: { column, line, piece },
      });
    } else {
      setBoard({
        ...board,
        selected: { column, line, piece },
      });
    }
  };

  return (
    <>
      <S.Board>
        {COLUMNS.map((column) => (
          <S.Column key={column}>
            {LINES.map((line) => {
              const piece = Object.values(board.pieces).find(
                (piece) => piece.column === column && piece.line === line
              );
              const selected =
                column === board.selected.column &&
                line === board.selected.line;

              return (
                <S.Square
                  key={line}
                  onClick={() => handleSelection({ column, line, piece })}
                  selected={selected}
                >
                  {piece && <Piece type={piece.type} />}
                </S.Square>
              );
            })}
          </S.Column>
        ))}
      </S.Board>
      <p>
        square selected: {board.selected.column}
        {board.selected.line}
      </p>
      <p>piece selected: {board.selected.piece?.id}</p>
    </>
  );
};

export default Board;
