import React, { useState, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Board from 'components/Board';
import Piece from 'components/Piece';
import LegalMove from 'components/LegalMove';
import legalMoves from 'logics/legalMoves';
import check from 'logics/check';
import startPosition from 'startPosition';
import * as S from './App.style';

const App = () => {
  const [inCheck, setInCheck] = useState(false);
  const [pieces, setPieces] = useState(
    startPosition.map((piece, id) => ({
      ...piece,
      id,
      moved: false,
      legalMoves: legalMoves({ piece, pieces: startPosition }),
    }))
  );

  const handleSelection = (position) => {
    setPieces(
      pieces.map((piece) => ({
        ...piece,
        selected: piece.position === position,
      }))
    );
  };

  const handleMove = ({ from, to }) => {
    const withoutTakedPiece = pieces.filter((piece) => piece.position !== to);

    const withMovedPiece = withoutTakedPiece.map((piece) => {
      if (piece.position === from) {
        return {
          ...piece,
          moved: true,
          position: to,
        };
      } else {
        return piece;
      }
    });

    const withLegalMoves = withMovedPiece.map((piece) => ({
      ...piece,
      legalMoves: legalMoves({ piece, pieces: withMovedPiece }),
    }));

    setInCheck(check({ pieces: withLegalMoves, player: 'white' }));

    setPieces(withLegalMoves);
  };

  window.pieces = pieces;
  console.clear();
  console.table(pieces);

  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <Board>
          {pieces.map((piece) => (
            <Fragment key={piece.id}>
              <Piece
                player={piece.player}
                piece={piece.type}
                position={piece.position}
                onFocus={() => handleSelection(piece.position)}
                onBlur={() => handleSelection()}
                tabIndex="-1"
              />
              {piece.selected &&
                piece.legalMoves?.map((move, key) => (
                  <LegalMove
                    onMouseDown={() =>
                      handleMove({ from: piece.position, to: move })
                    }
                    position={move}
                    key={key}
                  />
                ))}
            </Fragment>
          ))}
        </Board>

        <div>{inCheck ? 'in check' : 'is not a check'}</div>
      </S.App>
    </ThemeProvider>
  );
};

export default App;
