import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Board from 'components/Board';
import Piece from 'components/Piece';
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
            <Piece
              key={key}
              player={piece.player}
              piece={piece.type}
              square={piece.square}
              selected={piece.selected}
              onClick={() => handlePiece(piece.square)}
            >
              piece
            </Piece>
          ))}
        </Board>
      </S.App>
    </ThemeProvider>
  );
};

export default App;
