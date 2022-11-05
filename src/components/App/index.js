import React, { useState, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Board from 'components/Board';
import Piece from 'components/Piece';
import Move from 'components/Move';
import Promotion from 'components/Promotion';
import getMovesByPiece from 'logics/moves';
import check from 'logics/check';
import getPosition from 'logics/getPosition';
import startPosition from 'startPosition';
import * as S from './style';

const parseStartPosition = () => {
  let parsedStartPosition = startPosition.map((piece, id) => ({
    ...piece,
    id,
    moved: false,
  }));

  let parsedStartPositionWithMoves = parsedStartPosition.map((piece) => ({
    ...piece,
    moves: getMovesByPiece({ piece, pieces: parsedStartPosition }),
  }));

  return parsedStartPositionWithMoves;
};

const App = () => {
  const [player, setPlayer] = useState('white');

  const [pieces, setPieces] = useState(() => parseStartPosition());

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
    const newPosition = getPosition({
      origin,
      target,
      player,
      pieces,
      promotionPiece,
    });

    setPieces(newPosition);
    setPlayer(player === 'white' ? 'black' : 'white');
  };

  const playerMoves = pieces.find(
    (piece) => piece.color === player && piece.moves.length
  );

  const checked = check({
    player,
    pieces,
  });

  const checkmated = checked && !playerMoves;

  window.pieces = pieces;

  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <Board>
          {pieces.map(({ id, color, type, position, selected, moves }) => (
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
                moves?.map((move, key) => (
                  <Move
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
