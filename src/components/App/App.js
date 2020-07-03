import React, { useState, useEffect, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Board from 'components/Board';
import Piece from 'components/Piece';
import LegalMove from 'components/LegalMove';
import piecesWithLegalMoves from 'logics/piecesWithLegalMoves';
import * as S from './App.style';

const App = () => {
  const [pieces, setPieces] = useState([
    {
      player: 'white',
      type: 'king',
      square: [2, 2],
    },
    {
      player: 'white',
      type: 'queen',
      square: [5, 5],
    },
    {
      player: 'white',
      type: 'queen',
      square: [2, 4],
    },
  ]);

  useEffect(() => {
    setPieces(piecesWithLegalMoves(pieces));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelection = (square) => {
    setPieces(
      pieces.map((piece) => ({
        ...piece,
        selected: piece.square === square,
      }))
    );
  };

  const handleMove = ({ from, to }) => {
    const piecesInNewPositions = pieces.map((piece) => {
      if (piece.square === from) {
        return {
          ...piece,
          square: to,
        };
      } else {
        return piece;
      }
    });

    setPieces(piecesWithLegalMoves(piecesInNewPositions));
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
                onFocus={() => handleSelection(piece.square)}
                onBlur={() => handleSelection()}
                tabIndex="-1"
              >
                teste
              </Piece>
              {piece.selected &&
                piece.legalMoves?.map((move, key) => (
                  <LegalMove
                    onMouseDown={() =>
                      handleMove({ from: piece.square, to: move })
                    }
                    square={move}
                    key={key}
                  />
                ))}
            </Fragment>
          ))}
        </Board>
      </S.App>
    </ThemeProvider>
  );
};

export default App;
