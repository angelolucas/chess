import React from 'react';

import { BOARD_COLS, BOARD_ROWS } from '@/constants/board';
import { arrayByNumber } from '@/helpers/array';

const Board = () => {
  const getSquareColor = (row: number, col: number) => {
    return (row + col) % 2 === 0 ? 'bg-light' : 'bg-dark';
  };

  return (
    <div className="grid grid-cols-8 gap-0 w-[70vmin] h-[70vmin]">
      {arrayByNumber(BOARD_ROWS).map((row) =>
        arrayByNumber(BOARD_COLS).map((col) => (
          <div
            key={`${row}-${col}`}
            className={`w-full h-full ${getSquareColor(row, col)}`}
          ></div>
        ))
      )}
    </div>
  );
};

export default Board;
