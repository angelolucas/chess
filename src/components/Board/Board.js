import React, { useState } from "react";
import Piece from "../Piece";
import * as S from "./Board.style";
import legalMoves from "../../logics/legalMoves";

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];
const RANKS = [8, 7, 6, 5, 4, 3, 2, 1];

const Board = () => {
  const [board, setBoard] = useState({
    currentPlayer: "white",
    selected: {
      file: null,
      rank: null,
      piece: null,
      legalMoves: [],
    },
    pieces: {
      1: {
        id: 1,
        player: "white",
        type: "rook",
        file: "c",
        rank: 4,
      },
      5: {
        id: 5,
        player: "white",
        type: "rook",
        file: "d",
        rank: 6,
      },
      2: {
        id: 2,
        player: "white",
        type: "bishop",
        file: "a",
        rank: 1,
      },
      3: {
        id: 3,
        player: "white",
        type: "queen",
        file: "f",
        rank: 4,
      },
    },
  });

  const handleSquare = ({ file, rank, piece }) => {
    board.selected.piece
      ? handleMove({ file, rank, piece })
      : handleSelection({ file, rank, piece });
  };

  const handleSelection = ({ file, rank, piece }) => {
    let newBoardState = Object.assign({}, board);

    if (piece && piece.player !== board.currentPlayer) return false;

    newBoardState.selected.file = file;
    newBoardState.selected.rank = rank;
    newBoardState.selected.piece = piece;

    if (piece) {
      newBoardState.selected.legalMoves = legalMoves(newBoardState);
    }

    setBoard(newBoardState);
  };

  const handleMove = ({ file, rank, piece }) => {
    let newBoardState = Object.assign({}, board);
    const selectedPiece = board.selected.piece;

    const legalMove = board.selected.legalMoves.find(
      (square) => square.file === file && square.rank === rank
    );

    if (legalMove) {
      newBoardState.currentPlayer =
        board.currentPlayer === "white" ? "white" : "white";
      newBoardState.pieces[selectedPiece.id].file = file;
      newBoardState.pieces[selectedPiece.id].rank = rank;

      // capture
      if (piece) {
        delete newBoardState.pieces[piece.id];
      }
    }

    newBoardState.selected = {
      file: null,
      rank: null,
      piece: null,
      legalMoves: [],
    };

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

              const legalMove = board.selected.legalMoves.find(
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
