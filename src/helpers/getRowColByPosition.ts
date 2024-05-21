import { BOARD_COLS } from '@/constants/board';

const getRowColByPosition = (position: number) => {
  const row = Math.floor(position / BOARD_COLS);
  const col = position % BOARD_COLS;

  return { row, col };
};

export default getRowColByPosition;
