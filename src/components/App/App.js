import React, { useState, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Board from 'components/Board';
import Piece from 'components/Piece';
import LegalMove from 'components/LegalMove';
import * as S from './App.style';

const App = () => {
  const [pieces, setPieces] = useState([
    {
      player: 'white',
      type: 'bishop',
      square: [1, 1],
    },
    {
      player: 'black',
      type: 'queen',
      square: [5, 5],
      legalMoves: [
        [4, 1],
        [2, 2],
      ],
    },
  ]);

  const handlePiece = (square) => {
    setPieces(
      pieces.map((piece) => ({
        ...piece,
        selected: piece.square === square,
      }))
    );
  };

  window.pieces = pieces;

  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <Board>
          {pieces.map((piece, key) => (
            <Fragment key={key}>
              <Piece
                player={piece.player}
                piece={piece.type}
                square={piece.square}
                selected={piece.selected}
                onClick={() => handlePiece(piece.square)}
              >
                piece
              </Piece>
              {piece.selected &&
                piece.legalMoves?.map((move, key) => (
                  <LegalMove key={key} square={move} />
                ))}
            </Fragment>
          ))}
        </Board>
      </S.App>
    </ThemeProvider>
  );
};

export default App;
