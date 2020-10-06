import React, { useState, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Board from 'components/Board';
import Piece from 'components/Piece';
import LegalMove from 'components/LegalMove';
import legalMoves from 'logics/legalMoves';
import startPosition from 'startPosition';
import * as S from './App.style';

const App = () => {
  const [pieces, setPieces] = useState(
    startPosition.map((piece, id) => ({
      ...piece,
      id,
      moved: false,
      legalMoves: legalMoves({ piece, pieces: startPosition }),
    }))
  );

  const handleSelection = (square) => {
    setPieces(
      pieces.map((piece) => ({
        ...piece,
        selected: piece.square === square,
      }))
    );
  };

  const handleMove = ({ from, to }) => {
    const withoutTakedPiece = pieces.filter((piece) => piece.square !== to);

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
      legalMoves: legalMoves({ piece, pieces: withMovedPiece }),
    }));

    setPieces(withLegalMoves);
  };

  window.pieces = pieces;

  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <Board>
          {pieces.map((piece) => (
            <Fragment key={piece.id}>
              <Piece
                player={piece.player}
                piece={piece.type}
                square={piece.square}
                onFocus={() => handleSelection(piece.square)}
                onBlur={() => handleSelection()}
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
