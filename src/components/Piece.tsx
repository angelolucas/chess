import { PieceType, Player } from '@/types/app.types';
import IconWhitePawn from '@/icons/white-pawn.svg';
import IconBlackPawn from '@/icons/black-pawn.svg';
import IconWhiteRook from '@/icons/white-rook.svg';
import IconBlackRook from '@/icons/black-rook.svg';
import IconWhiteKnight from '@/icons/white-knight.svg';
import IconBlackKnight from '@/icons/black-knight.svg';
import IconWhiteBishop from '@/icons/white-bishop.svg';
import IconBlackBishop from '@/icons/black-bishop.svg';
import IconWhiteQueen from '@/icons/white-queen.svg';
import IconBlackQueen from '@/icons/black-queen.svg';
import IconWhiteKing from '@/icons/white-king.svg';
import IconBlackKing from '@/icons/black-king.svg';

import Image from 'next/image';
import { BOARD_COLS, BOARD_ROWS } from '@/constants/board';
import clsx from 'clsx';
import { getRowColByPosition } from '@/helpers/getRowColByPosition';

interface PieceProps {
  player: Player;
  type: PieceType;
  position: number;
  selected?: boolean;
  checked?: boolean;
  checkmated?: boolean;
  promotion?: boolean;
  rotate?: boolean;
  onClick: () => void;
}

const getPieceAsset = (player: Player, type: PieceType) => {
  switch (type) {
    case 'pawn':
      return player === 'white' ? IconWhitePawn : IconBlackPawn;
    case 'rook':
      return player === 'white' ? IconWhiteRook : IconBlackRook;
    case 'knight':
      return player === 'white' ? IconWhiteKnight : IconBlackKnight;
    case 'bishop':
      return player === 'white' ? IconWhiteBishop : IconBlackBishop;
    case 'queen':
      return player === 'white' ? IconWhiteQueen : IconBlackQueen;
    case 'king':
      return player === 'white' ? IconWhiteKing : IconBlackKing;
  }
};

const Piece = ({
  player,
  type,
  position,
  selected,
  checked,
  checkmated,
  promotion,
  rotate,
  onClick,
}: PieceProps) => {
  const { row, col } = getRowColByPosition(position);
  const width = `calc(100%/${BOARD_COLS})`;
  const height = `calc(100%/${BOARD_ROWS})`;
  const top = `${(row - 1) * (100 / BOARD_ROWS)}%`;
  const left = `${(col - 1) * (100 / BOARD_COLS)}%`;

  return (
    <Image
      className={clsx(
        'absolute cursor-pointer transition-[top,left,transform] duration-500',
        {
          'bg-board-selected-piece': selected,
          'bg-board-promotion shadow-lg shadow-board-promotion': promotion,
          'bg-board-check': checked,
          'bg-board-checkmate': checkmated,
          'rotate-180': rotate,
        }
      )}
      src={getPieceAsset(player, type).src}
      alt="white pawn"
      width={100}
      height={100}
      style={{ width, height, top, left }}
      onClick={onClick}
    />
  );
};

export default Piece;
