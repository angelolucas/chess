import React, { useState } from 'react';
import Board from 'components/Board';
import Piece from 'components/Piece';
import * as S from './App.style';

const App = () => {
  const [pieces, setPieces] = useState([
    {
      player: 'white',
      type: 'bishop',
      square: [1, 1], // file and rank
    },
    {
      player: 'black',
      type: 'queen',
      square: [5, 4], // file and rank
    },
  ]);

  return (
    <S.App>
      <Board>
        {pieces.map((piece, key) => (
          <Piece
            key={key}
            player={piece.player}
            piece={piece.type}
            square={piece.square}
            selected
          >
            piece
          </Piece>
        ))}
      </Board>
    </S.App>
  );
};

export default App;
