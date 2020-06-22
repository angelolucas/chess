import React, { useState } from 'react';
import GlobalStyles from 'GlobalStyles';
import Board from 'components/Board';
import Piece from 'components/Piece';

const App = () => {
  const [pieces, setPieces] = useState([
    {
      player: 'white',
      type: 'bishop',
      square: [1, 1], // file and rank
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <Board>
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
      </Board>
    </>
  );
};

export default App;
