import React, { useState, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Board from 'components/Board';
import Piece from 'components/Piece';
import LegalMove from 'components/LegalMove';
import legalMoves from 'logics/legalMoves';
import check from 'logics/check';
import move from 'logics/move';
import startPosition from 'startPosition';
import * as S from './App.style';

const enemy = (player) => (player === 'white' ? 'black' : 'white');

const App = () => {
  const [player, setPlayer] = useState('white');
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
    const piecesInNewPosition = move({ from, to, pieces });

    setInCheck(check({ player: enemy(player), pieces: piecesInNewPosition }));

    setPieces(piecesInNewPosition);

    setPlayer(enemy(player));
  };

  window.pieces = pieces;

  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <div>{inCheck ? `${inCheck} in check` : 'is not a check'}</div>
        <Board>
          {pieces.map((piece) => (
            <Fragment key={piece.id}>
              <Piece
                player={piece.player}
                piece={piece.type}
                position={piece.position}
                onFocus={() => {
                  player === piece.player && handleSelection(piece.position);
                }}
                onBlur={() => handleSelection()}
                inCheck={piece.type === 'king' && inCheck === piece.player}
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
      </S.App>
    </ThemeProvider>
  );
};

export default App;
