import { BOARD_COLS, BOARD_ROWS } from '@/constants/board';
import getRowColByPosition from '@/helpers/getRowColByPosition';

interface MoveProps {
  position: number;
  onClick: () => void;
}

const Move = ({ position, onClick }: MoveProps) => {
  const { row, col } = getRowColByPosition(position);
  const width = `calc(100%/${BOARD_COLS})`;
  const height = `calc(100%/${BOARD_ROWS})`;
  const top = `${(row - 1) * (100 / BOARD_ROWS)}%`;
  const left = `${(col - 1) * (100 / BOARD_COLS)}%`;

  return (
    <button
      style={{ width, height, top, left }}
      className="absolute flex items-center justify-center"
      onClick={onClick}
    >
      <span className="w-10 h-10 bg-board-move block rounded-full" />
    </button>
  );
};

export default Move;
