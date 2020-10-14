import React from 'react';
import { ReactComponent as WhitePawn } from 'assets/white-pawn.svg';
import { ReactComponent as WhiteRook } from 'assets/white-rook.svg';
import { ReactComponent as WhiteKnight } from 'assets/white-knight.svg';
import { ReactComponent as WhiteBishop } from 'assets/white-bishop.svg';
import { ReactComponent as WhiteQueen } from 'assets/white-queen.svg';
import { ReactComponent as WhiteKing } from 'assets/white-king.svg';
import { ReactComponent as BlackPawn } from 'assets/black-pawn.svg';
import { ReactComponent as BlackRook } from 'assets/black-rook.svg';
import { ReactComponent as BlackKnight } from 'assets/black-knight.svg';
import { ReactComponent as BlackBishop } from 'assets/black-bishop.svg';
import { ReactComponent as BlackQueen } from 'assets/black-queen.svg';
import { ReactComponent as BlackKing } from 'assets/black-king.svg';
import * as S from './Piece.style';

const Image = ({ player, piece }) =>
  ({
    'white-pawn': <WhitePawn />,
    'white-rook': <WhiteRook />,
    'white-knight': <WhiteKnight />,
    'white-bishop': <WhiteBishop />,
    'white-queen': <WhiteQueen />,
    'white-king': <WhiteKing />,
    'black-pawn': <BlackPawn />,
    'black-rook': <BlackRook />,
    'black-knight': <BlackKnight />,
    'black-bishop': <BlackBishop />,
    'black-queen': <BlackQueen />,
    'black-king': <BlackKing />,
  }[`${player}-${piece}`]);

const Piece = ({
  player,
  piece,
  position,
  rotate,
  checked,
  checkmated,
  ...props
}) => {
  const [file, rank] = (position / 10).toString().split('.');

  return (
    <S.Piece
      file={file}
      rank={rank}
      rotate={rotate}
      checked={checked}
      checkmated={checkmated}
      {...props}
    >
      <Image player={player} piece={piece} />
    </S.Piece>
  );
};

export default Piece;
