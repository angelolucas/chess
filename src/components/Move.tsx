import { BOARD_COLS, BOARD_ROWS } from '@/constants/board';
import getRowColByPosition from '@/helpers/getRowColByPosition';

interface MoveProps {
  position: number;
  onClick: () => void;
}

const Move = ({ position, onClick }: MoveProps) => {
  const { row, col } = getRowColByPosition(position);

  return (
    <button
      style={{
        width: `calc(100%/${BOARD_COLS})`,
        height: `calc(100%/${BOARD_ROWS})`,
        top: `${row * (100 / BOARD_ROWS)}%`,
        left: `${col * (100 / BOARD_COLS)}%`,
      }}
      className="absolute flex items-center justify-center"
      onClick={onClick}
    >
      <span className="w-10 h-10 bg-board-move block rounded-full" />
    </button>
  );
};

export default Move;
