import React, { useState } from 'react';
import Piece from 'components/Piece';
import * as S from './Board.style';

const Board = () => {
  const [pieces, setPieces] = useState([
    {
      player: 'white',
      type: 'bishop',
      square: [1, 1], // file and rank
    },
  ]);
  return (
    <S.Board>
      {pieces.map((piece, key) => (
        <Piece
          key={key}
          player={piece.player}
          piece={piece.type}
          square={piece.square}
        >
          piece
        </Piece>
      ))}
    </S.Board>
  );
};

export default Board;
