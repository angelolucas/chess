import React, { useState, useEffect, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Board from 'components/Board';
import Piece from 'components/Piece';
import LegalMove from 'components/LegalMove';
import getLegalMoves from 'moviments/getLegalMoves';
import * as S from './App.style';

const App = () => {
  const [pieces, setPieces] = useState([
    {
      player: 'white',
      type: 'king',
      square: [4, 7],
    },
    {
      player: 'white',
      type: 'rook',
      square: [0, 7],
    },
    {
      player: 'white',
      type: 'rook',
      square: [7, 7],
    },
    {
      player: 'black',
      type: 'king',
      square: [4, 0],
    },
    {
      player: 'black',
      type: 'rook',
      square: [0, 0],
    },
    {
      player: 'black',
      type: 'rook',
      square: [7, 0],
    },
    {
      player: 'black',
      type: 'pawn',
      square: [3, 1],
    },
    {
      player: 'black',
      type: 'pawn',
      square: [4, 1],
    },
    {
      player: 'white',
      type: 'pawn',
      square: [3, 6],
    },
    {
      player: 'white',
      type: 'pawn',
      square: [4, 6],
    },
  ]);

  useEffect(() => {
    // Set initial state
    setPieces(
      pieces.map((piece, id) => ({
        ...piece,
        id,
        moved: false,
        legalMoves: getLegalMoves({ piece, pieces }),
      }))
    );
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
    const withoutTakedPiece = pieces.filter(
      (piece) => piece.square[0] !== to[0] || piece.square[1] !== to[1]
    );

    const withMovedPiece = withoutTakedPiece.map((piece) => {
      if (piece.square === from) {
        return {
          ...piece,
          moved: true,
          square: to,
        };
      } else {
        return piece;
      }
    });

    const withLegalMoves = withMovedPiece.map((piece) => ({
      ...piece,
      legalMoves: getLegalMoves({ piece, pieces: withMovedPiece }),
    }));

    setPieces(withLegalMoves);
  };

  window.pieces = pieces;

  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <Board rotate={false}>
          {pieces.map((piece) => (
            <Fragment key={piece.id}>
              <Piece
                player={piece.player}
                piece={piece.type}
                square={piece.square}
                onFocus={() => handleSelection(piece.square)}
                onBlur={() => handleSelection()}
                rotate={false}
                tabIndex="-1"
              />
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
