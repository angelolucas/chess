import React, { useState } from "react";
import Piece from "../Piece";
import * as S from "./Board.style";

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];
const RANKS = [8, 7, 6, 5, 4, 3, 2, 1];

const Board = () => {
  const [board, setBoard] = useState({
    currentPlayer: "white",
    selected: {
      file: null,
      rank: null,
      piece: null,
      legalMove: [],
    },
    pieces: {
      wqr: {
        id: "wqr",
        player: "white",
        type: "rook",
        file: "a",
        rank: 1,
      },
      wqk: {
        id: "wqk",
        player: "white",
        type: "knight",
        file: "b",
        rank: 1,
      },
      wqb: {
        id: "wqb",
        player: "white",
        type: "bishop",
        file: "c",
        rank: 1,
      },
      wq: {
        id: "wq",
        player: "white",
        type: "queen",
        file: "d",
        rank: 1,
      },
      wk: {
        id: "wk",
        player: "white",
        type: "king",
        file: "e",
        rank: 1,
      },
      wkb: {
        id: "wkb",
        player: "white",
        type: "bishop",
        file: "f",
        rank: 1,
      },
      wkk: {
        id: "wkk",
        player: "white",
        type: "knight",
        file: "g",
        rank: 1,
      },
      wkr: {
        id: "wkr",
        player: "white",
        type: "rook",
        file: "h",
        rank: 1,
      },
      wp1: {
        id: "wp1",
        player: "white",
        type: "pawn",
        file: "a",
        rank: 2,
      },
      wp2: {
        id: "wp2",
        player: "white",
        type: "pawn",
        file: "b",
        rank: 2,
      },
      wp3: {
        id: "wp3",
        player: "white",
        type: "pawn",
        file: "c",
        rank: 2,
      },
      wp4: {
        id: "wp4",
        player: "white",
        type: "pawn",
        file: "d",
        rank: 2,
      },
      wp5: {
        id: "wp5",
        player: "white",
        type: "pawn",
        file: "e",
        rank: 2,
      },
      wp6: {
        id: "wp6",
        player: "white",
        type: "pawn",
        file: "f",
        rank: 2,
      },
      wp7: {
        id: "wp7",
        player: "white",
        type: "pawn",
        file: "g",
        rank: 2,
      },
      wp8: {
        id: "wp8",
        player: "white",
        type: "pawn",
        file: "h",
        rank: 2,
      },
      bqr: {
        id: "bqr",
        player: "black",
        type: "rook",
        file: "a",
        rank: 8,
      },
      bqk: {
        id: "bqk",
        player: "black",
        type: "knight",
        file: "b",
        rank: 8,
      },
      bqb: {
        id: "bqb",
        player: "black",
        type: "bishop",
        file: "c",
        rank: 8,
      },
      bq: {
        id: "bq",
        player: "black",
        type: "queen",
        file: "d",
        rank: 8,
      },
      bk: {
        id: "bk",
        player: "black",
        type: "king",
        file: "e",
        rank: 8,
      },
      bkb: {
        id: "bkb",
        player: "black",
        type: "bishop",
        file: "f",
        rank: 8,
      },
      bkk: {
        id: "bkk",
        player: "black",
        type: "knight",
        file: "g",
        rank: 8,
      },
      bkr: {
        id: "bkr",
        player: "black",
        type: "rook",
        file: "h",
        rank: 8,
      },
      bp1: {
        id: "bp1",
        player: "black",
        type: "pawn",
        file: "a",
        rank: 7,
      },
      bp2: {
        id: "bp2",
        player: "black",
        type: "pawn",
        file: "b",
        rank: 7,
      },
      bp3: {
        id: "bp3",
        player: "black",
        type: "pawn",
        file: "c",
        rank: 7,
      },
      bp4: {
        id: "bp4",
        player: "black",
        type: "pawn",
        file: "d",
        rank: 7,
      },
      bp5: {
        id: "bp5",
        player: "black",
        type: "pawn",
        file: "e",
        rank: 7,
      },
      bp6: {
        id: "bp6",
        player: "black",
        type: "pawn",
        file: "f",
        rank: 7,
      },
      bp7: {
        id: "bp7",
        player: "black",
        type: "pawn",
        file: "g",
        rank: 7,
      },
      bp8: {
        id: "bp8",
        player: "black",
        type: "pawn",
        file: "h",
        rank: 7,
      },
    },
  });

  const handleSquare = ({ file, rank, piece }) => {
    board.selected.piece
      ? handleMove({ file, rank, piece })
      : handleSelection({ file, rank, piece });
  };

  const legalMove = ({ file, rank, piece }) => {
    return [
      { file: "d", rank: 3 },
      { file: "d", rank: 4 },
    ];
  };

  const handleSelection = ({ file, rank, piece }) => {
    let newBoardState = Object.assign({}, board);

    if (piece && piece.player !== board.currentPlayer) return false;

    newBoardState.selected.file = file;
    newBoardState.selected.rank = rank;
    newBoardState.selected.piece = piece;
    newBoardState.selected.legalMove = legalMove({ file, rank, piece });

    setBoard(newBoardState);
  };

  const handleMove = ({ file, rank, piece }) => {
    let newBoardState = Object.assign({}, board);
    const selectedPiece = board.selected.piece;

    newBoardState.currentPlayer =
      board.currentPlayer === "white" ? "black" : "white";
    newBoardState.pieces[selectedPiece.id].file = file;
    newBoardState.pieces[selectedPiece.id].rank = rank;
    newBoardState.selected = {
      file: null,
      rank: null,
      piece: null,
      legalMove: [],
    };

    // capture
    if (piece) {
      delete newBoardState.pieces[piece.id];
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

              const legalMove = board.selected.legalMove.find(
                (square) => square.file === file && square.rank === rank
              );

              return (
                <S.Square
                  key={rank}
                  onClick={() => handleSquare({ file, rank, piece })}
                  selected={selected && true}
                  legalMove={legalMove && true}
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
      <p>current player: {board.currentPlayer}</p>
    </>
  );
};

export default Board;
