import React, { useState } from "react";
import Piece from "../Piece";
import * as S from "./Board.style";

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];
const RANKS = [8, 7, 6, 5, 4, 3, 2, 1];

const Board = () => {
  const [board, setBoard] = useState({
    whiteToMove: true,
    selected: {
      file: undefined,
      rank: undefined,
      piece: undefined,
    },
    pieces: {
      "white-queen-rook": {
        id: "white-queen-rook",
        player: "white",
        type: "rook",
        file: "a",
        rank: 1,
      },
      "white-queen-knight": {
        id: "white-queen-knight",
        player: "white",
        type: "knight",
        file: "b",
        rank: 1,
      },
      "white-queen-bishop": {
        id: "white-queen-bishop",
        player: "white",
        type: "bishop",
        file: "c",
        rank: 1,
      },
      "white-queen": {
        id: "white-queen",
        player: "white",
        type: "queen",
        file: "d",
        rank: 1,
      },
      "white-king": {
        id: "white-king",
        player: "white",
        type: "king",
        file: "e",
        rank: 1,
      },
      "white-king-bishop": {
        id: "white-king-bishop",
        player: "white",
        type: "bishop",
        file: "f",
        rank: 1,
      },
      "white-king-knight": {
        id: "white-king-knight",
        player: "white",
        type: "knight",
        file: "g",
        rank: 1,
      },
      "white-king-rook": {
        id: "white-king-rook",
        player: "white",
        type: "rook",
        file: "h",
        rank: 1,
      },
      "white-pawn1": {
        id: "white-pawn1",
        player: "white",
        type: "pawn",
        file: "a",
        rank: 2,
      },
      "white-pawn2": {
        id: "white-pawn2",
        player: "white",
        type: "pawn",
        file: "b",
        rank: 2,
      },
      "white-pawn3": {
        id: "white-pawn3",
        player: "white",
        type: "pawn",
        file: "c",
        rank: 2,
      },
      "white-pawn4": {
        id: "white-pawn4",
        player: "white",
        type: "pawn",
        file: "d",
        rank: 2,
      },
      "white-pawn5": {
        id: "white-pawn5",
        player: "white",
        type: "pawn",
        file: "e",
        rank: 2,
      },
      "white-pawn6": {
        id: "white-pawn6",
        player: "white",
        type: "pawn",
        file: "f",
        rank: 2,
      },
      "white-pawn7": {
        id: "white-pawn7",
        player: "white",
        type: "pawn",
        file: "g",
        rank: 2,
      },
      "white-pawn8": {
        id: "white-pawn8",
        player: "white",
        type: "pawn",
        file: "h",
        rank: 2,
      },
      "black-queen-rook": {
        id: "black-queen-rook",
        player: "black",
        type: "rook",
        file: "a",
        rank: 8,
      },
      "black-queen-knight": {
        id: "black-queen-knight",
        player: "black",
        type: "knight",
        file: "b",
        rank: 8,
      },
      "black-queen-bishop": {
        id: "black-queen-bishop",
        player: "black",
        type: "bishop",
        file: "c",
        rank: 8,
      },
      "black-queen": {
        id: "black-queen",
        player: "black",
        type: "queen",
        file: "d",
        rank: 8,
      },
      "black-king": {
        id: "black-king",
        player: "black",
        type: "king",
        file: "e",
        rank: 8,
      },
      "black-king-bishop": {
        id: "black-king-bishop",
        player: "black",
        type: "bishop",
        file: "f",
        rank: 8,
      },
      "black-king-knight": {
        id: "black-king-knight",
        player: "black",
        type: "knight",
        file: "g",
        rank: 8,
      },
      "black-king-rook": {
        id: "black-king-rook",
        player: "black",
        type: "rook",
        file: "h",
        rank: 8,
      },
      "black-pawn1": {
        id: "black-pawn1",
        player: "black",
        type: "pawn",
        file: "a",
        rank: 7,
      },
      "black-pawn2": {
        id: "black-pawn2",
        player: "black",
        type: "pawn",
        file: "b",
        rank: 7,
      },
      "black-pawn3": {
        id: "black-pawn3",
        player: "black",
        type: "pawn",
        file: "c",
        rank: 7,
      },
      "black-pawn4": {
        id: "black-pawn4",
        player: "black",
        type: "pawn",
        file: "d",
        rank: 7,
      },
      "black-pawn5": {
        id: "black-pawn5",
        player: "black",
        type: "pawn",
        file: "e",
        rank: 7,
      },
      "black-pawn6": {
        id: "black-pawn6",
        player: "black",
        type: "pawn",
        file: "f",
        rank: 7,
      },
      "black-pawn7": {
        id: "black-pawn7",
        player: "black",
        type: "pawn",
        file: "g",
        rank: 7,
      },
      "black-pawn8": {
        id: "black-pawn8",
        player: "black",
        type: "pawn",
        file: "h",
        rank: 7,
      },
    },
  });

  const handleMove = ({ file, rank, piece }) => {
    let newBoardState = Object.assign({}, board);
    const selectedPiece = board.selected.piece;

    // tap on empty square without piece selected
    if (!selectedPiece && !piece) {
      return false;
    }

    // with moviment
    if (selectedPiece) {
      newBoardState.whiteToMove = !board.whiteToMove;
      newBoardState.pieces[selectedPiece.id].file = file;
      newBoardState.pieces[selectedPiece.id].rank = rank;
      newBoardState.selected = {
        file: null,
        rank: null,
        piece: null,
      };

      // capture
      if (piece) {
        delete newBoardState.pieces[piece.id];
      }
    } else {
      // selection of empty square
      newBoardState.selected = {
        file,
        rank,
        piece,
      };
    }

    setBoard(newBoardState);
  };

  return (
    <>
      <S.Board>
        {FILES.map((file) => (
          <S.Ranks key={file}>
            {RANKS.map((rank) => {
              const piece = Object.values(board.pieces).find(
                (piece) => piece.file === file && piece.rank === rank
              );
              const selected =
                file === board.selected.file && rank === board.selected.rank;

              return (
                <S.Square
                  key={rank}
                  onClick={() => handleMove({ file, rank, piece })}
                  selected={selected}
                >
                  {piece && <Piece player={piece.player} piece={piece.type} />}
                </S.Square>
              );
            })}
          </S.Ranks>
        ))}
      </S.Board>
      <p>
        square selected: {board.selected.file}
        {board.selected.rank}
      </p>
      <p>piece selected: {board.selected.piece?.id}</p>
      <p>turn: {board.whiteToMove ? "white" : "black"}</p>
    </>
  );
};

export default Board;
