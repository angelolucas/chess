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

  const handleMove = ({ origin, target, isPawn, promotionPiece }) => {
    const eighthRank = [1, 8].includes(target % 10);
    const promotionChoice = eighthRank && isPawn && !promotionPiece;

    if (promotionChoice) {
      return setPromotion({ origin, target });
    }

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
          {pieces.map((piece) => (
            <Fragment key={piece.id}>
              <Piece
                color={piece.color}
                type={piece.type}
                position={piece.position}
                onFocus={() => {
                  player === piece.color && handleSelection(piece.position);
                }}
                onBlur={() => handleSelection()}
                checked={
                  checked && piece.type === 'king' && piece.color === player
                }
                checkmated={
                  checkmated && piece.type === 'king' && piece.color === player
                }
                tabIndex="-1"
              />
              {piece.selected &&
                piece.legalMoves?.map((move, key) => (
                  <LegalMove
                    onMouseDown={() =>
                      handleMove({
                        origin: piece.position,
                        target: move,
                        isPawn: piece.type === 'pawn',
                      })
                    }
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
                  promotionPiece,
                  origin: promotion.origin,
                  target: promotion.target,
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
