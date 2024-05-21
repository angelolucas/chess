import React from 'react';

import { BOARD_COLS, BOARD_ROWS } from '@/constants/board';
import { arrayByNumber } from '@/helpers/array';

const Board = () => {
  let count = -1;
  const getSquareColor = (row: number, col: number) => {
    return (row + col) % 2 === 0
      ? 'bg-board-light-square'
      : 'bg-board-dark-square';
  };

  return (
    <div
      className="grid gap-0 w-[70vmin] h-[70vmin] order-last"
      style={{ gridTemplateColumns: `repeat(${BOARD_COLS}, minmax(0, 1fr))` }}
    >
      {arrayByNumber(BOARD_ROWS).map((row) =>
        arrayByNumber(BOARD_COLS).map((col) => {
          count++;

          return (
            <div
              key={`${row}-${col}`}
              className={`w-full h-full ${getSquareColor(row, col)}`}
            >
              <p className="text-ui-text-primary">{count}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Board;
