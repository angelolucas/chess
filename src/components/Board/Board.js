import React, { useState } from 'react';
import { FILES, RANKS } from 'constants.js';
import legalMoves from 'logics/legalMoves';
import { getPieceBySquare } from 'utils';
import Piece from 'components/Piece';
import * as S from './Board.style';

const Board = () => {
  const [board, setBoard] = useState({
    currentPlayer: 'white',
    selected: {
      file: null,
      rank: null,
      piece: null,
      legalMoves: [],
    },
    pieces: {
      1: {
        id: 1,
        player: 'white',
        type: 'king',
        file: 6,
        rank: 6,
      },
      2: {
        id: 2,
        player: 'white',
        type: 'queen',
        file: 2,
        rank: 2,
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

    //if (piece && piece.player !== board.currentPlayer) return false;

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
        board.currentPlayer === 'white' ? 'black' : 'white';
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

  window.board = board;

  return (
    <S.Board>
      {RANKS.map((rank) => (
        <S.Rank key={rank}>
          {FILES.map((file) => {
            const piece = getPieceBySquare({
              file,
              rank,
              pieces: board.pieces,
            });
            const selected =
              file === board.selected.file && rank === board.selected.rank;

            const legalMove = board.selected.legalMoves.find(
              (square) => square.file === file && square.rank === rank
            );

            return (
              <S.Square
                key={file}
                onClick={() => handleSquare({ file, rank, piece })}
                selected={selected && true}
                legalMove={legalMove && true}
              >
                {file}
                {rank}
                {piece && <Piece player={piece.player} piece={piece.type} />}
              </S.Square>
            );
          })}
        </S.Rank>
      ))}
    </S.Board>
  );
};

export default Board;
