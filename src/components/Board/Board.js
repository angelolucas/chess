import React, { useState } from "react";
import Piece from "../Piece";
import * as S from "./Board.style";

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];
const RANKS = [8, 7, 6, 5, 4, 3, 2, 1];

const Board = () => {
  const [board, setBoard] = useState({
    selected: {
      file: undefined,
      rank: undefined,
      piece: undefined,
    },
    pieces: {
      "white-queen-rook": {
        id: "white-queen-rook",
        type: "white-rook",
        file: "a",
        rank: 1,
      },
      "white-queen-knight": {
        id: "white-queen-knight",
        type: "white-knight",
        file: "b",
        rank: 1,
      },
      "white-queen-bishop": {
        id: "white-queen-bishop",
        type: "white-bishop",
        file: "c",
        rank: 1,
      },
      "white-queen": {
        id: "white-queen",
        type: "white-queen",
        file: "d",
        rank: 1,
      },
      "white-king": {
        id: "white-king",
        type: "white-king",
        file: "e",
        rank: 1,
      },
      "white-king-bishop": {
        id: "white-king-bishop",
        type: "white-bishop",
        file: "f",
        rank: 1,
      },
      "white-king-knight": {
        id: "white-king-knight",
        type: "white-knight",
        file: "g",
        rank: 1,
      },
      "white-king-rook": {
        id: "white-king-rook",
        type: "white-rook",
        file: "h",
        rank: 1,
      },
      "white-pawn1": {
        id: "white-pawn1",
        type: "white-pawn",
        file: "a",
        rank: 2,
      },
      "white-pawn2": {
        id: "white-pawn2",
        type: "white-pawn",
        file: "b",
        rank: 2,
      },
      "white-pawn3": {
        id: "white-pawn3",
        type: "white-pawn",
        file: "c",
        rank: 2,
      },
      "white-pawn4": {
        id: "white-pawn4",
        type: "white-pawn",
        file: "d",
        rank: 2,
      },
      "white-pawn5": {
        id: "white-pawn5",
        type: "white-pawn",
        file: "e",
        rank: 2,
      },
      "white-pawn6": {
        id: "white-pawn6",
        type: "white-pawn",
        file: "f",
        rank: 2,
      },
      "white-pawn7": {
        id: "white-pawn7",
        type: "white-pawn",
        file: "g",
        rank: 2,
      },
      "white-pawn8": {
        id: "white-pawn8",
        type: "white-pawn",
        file: "h",
        rank: 2,
      },
      "black-queen-rook": {
        id: "black-queen-rook",
        type: "black-rook",
        file: "a",
        rank: 8,
      },
      "black-queen-knight": {
        id: "black-queen-knight",
        type: "black-knight",
        file: "b",
        rank: 8,
      },
      "black-queen-bishop": {
        id: "black-queen-bishop",
        type: "black-bishop",
        file: "c",
        rank: 8,
      },
      "black-queen": {
        id: "black-queen",
        type: "black-queen",
        file: "d",
        rank: 8,
      },
      "black-king": {
        id: "black-king",
        type: "black-king",
        file: "e",
        rank: 8,
      },
      "black-king-bishop": {
        id: "black-king-bishop",
        type: "black-bishop",
        file: "f",
        rank: 8,
      },
      "black-king-knight": {
        id: "black-king-knight",
        type: "black-knight",
        file: "g",
        rank: 8,
      },
      "black-king-rook": {
        id: "black-king-rook",
        type: "black-rook",
        file: "h",
        rank: 8,
      },
      "black-pawn1": {
        id: "black-pawn1",
        type: "black-pawn",
        file: "a",
        rank: 7,
      },
      "black-pawn2": {
        id: "black-pawn2",
        type: "black-pawn",
        file: "b",
        rank: 7,
      },
      "black-pawn3": {
        id: "black-pawn3",
        type: "black-pawn",
        file: "c",
        rank: 7,
      },
      "black-pawn4": {
        id: "black-pawn4",
        type: "black-pawn",
        file: "d",
        rank: 7,
      },
      "black-pawn5": {
        id: "black-pawn5",
        type: "black-pawn",
        file: "e",
        rank: 7,
      },
      "black-pawn6": {
        id: "black-pawn6",
        type: "black-pawn",
        file: "f",
        rank: 7,
      },
      "black-pawn7": {
        id: "black-pawn7",
        type: "black-pawn",
        file: "g",
        rank: 7,
      },
      "black-pawn8": {
        id: "black-pawn8",
        type: "black-pawn",
        file: "h",
        rank: 7,
      },
    },
  });

  const handleSquare = ({ file, rank, piece }) => {
    let newBoardState = Object.assign({}, board);
    const selectedPiece = board.selected.piece;

    // tap on empty square without piece selected
    if (!selectedPiece && !piece) {
      return false;
    }

    // moviment
    if (selectedPiece) {
      newBoardState.pieces[selectedPiece.id].file = file;
      newBoardState.pieces[selectedPiece.id].rank = rank;
      newBoardState.selected = {
        file: null,
        rank: null,
        piece: null,
      };
      if (piece) {
        delete newBoardState.pieces[piece.id];
      }
    } else {
      newBoardState.selected = {
        file,
        rank,
        piece,
      };
    }

    // change selection
    console.log(newBoardState);
    setBoard(newBoardState);
  };

  return (
    <>
      <S.Board>
        {FILES.map((file) => (
          <S.Column key={file}>
            {RANKS.map((rank) => {
              const piece = Object.values(board.pieces).find(
                (piece) => piece.file === file && piece.rank === rank
              );
              const selected =
                file === board.selected.file && rank === board.selected.rank;

              return (
                <S.Square
                  key={rank}
                  onClick={() => handleSquare({ file, rank, piece })}
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
        square selected: {board.selected.file}
        {board.selected.rank}
      </p>
      <p>piece selected: {board.selected.piece?.id}</p>
    </>
  );
};

export default Board;
