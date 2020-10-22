import React, { useState, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Board from 'components/Board';
import Piece from 'components/Piece';
import LegalMove from 'components/LegalMove';
import Promotion from 'components/Promotion';
import legalMoves from 'logics/legalMoves';
import check from 'logics/check';
import move from 'logics/move';
import startPosition from 'startPosition';
import * as S from './App.style';

const App = () => {
  const [player, setPlayer] = useState('white');

  const [pieces, setPieces] = useState(() =>
    startPosition.map((piece, id) => ({
      ...piece,
      id,
      moved: false,
      legalMoves: legalMoves({ piece, pieces: startPosition }),
    }))
  );

  const [promotion, setPromotion] = useState(false);

  const handleSelection = (position) => {
    setPieces(
      pieces.map((piece) => ({
        ...piece,
        selected: piece.position === position,
      }))
    );
  };

  const handleMove = ({ origin, target, promotionPiece }) => {
    const newPosition = move({
      origin,
      target,
      player,
      pieces,
      promotionPiece,
    });

    setPieces(newPosition);
    setPlayer(player === 'white' ? 'black' : 'white');
  };

  const moves = pieces.find(
    (piece) => piece.color === player && piece.legalMoves.length
  );

  const checked = check({
    player,
    pieces,
  });

  const checkmated = checked && !moves;

  window.pieces = pieces;

  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <Board>
          {pieces.map(({ id, color, type, position, selected, legalMoves }) => (
            <Fragment key={id}>
              <Piece
                color={color}
                type={type}
                position={position}
                onFocus={() => {
                  player === color && handleSelection(position);
                }}
                onBlur={() => handleSelection()}
                checked={checked && type === 'king' && color === player}
                checkmated={checkmated && type === 'king' && color === player}
                tabIndex="-1"
              />
              {selected &&
                legalMoves?.map((move, key) => (
                  <LegalMove
                    onMouseDown={() => {
                      const eighthRank = [1, 8].includes(move % 10);

                      if (eighthRank && type === 'pawn' && !promotion) {
                        return setPromotion({
                          origin: position,
                          target: move,
                        });
                      }

                      handleMove({
                        origin: position,
                        target: move,
                      });
                    }}
                    position={move}
                    key={key}
                  />
                ))}
            </Fragment>
          ))}
          {promotion && (
            <Promotion
              square={promotion.target}
              onClick={(promotionPiece) =>
                handleMove({
                  origin: promotion.origin,
                  target: promotion.target,
                  promotionPiece,
                })
              }
              onClose={() => setPromotion(false)}
            />
          )}
        </Board>
      </S.App>
    </ThemeProvider>
  );
};

export default App;
