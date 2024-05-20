import { BOARD_COLS, BOARD_ROWS } from '@/constants/board';
import { Position } from '@/types/app.types';

interface MoveProps {
  position: Position;
  onClick: () => void;
}

const Move = ({ position, onClick }: MoveProps) => (
  <button
    style={{
      width: `calc(100%/${BOARD_COLS})`,
      height: `calc(100%/${BOARD_ROWS})`,
      top: `${position.row * (100 / BOARD_ROWS)}%`,
      left: `${position.col * (100 / BOARD_COLS)}%`,
    }}
    className="absolute flex items-center justify-center"
    onClick={onClick}
  >
    <span className="w-10 h-10 bg-board-move block rounded-full" />
  </button>
);

export default Move;
