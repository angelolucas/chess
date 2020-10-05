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

const getPisition = (square) => {
  const split = (square / 8).toFixed(3).split('.');
  const integer = Number(split[0]);
  const fraction = Number(split[1]);
  let file = integer + 1;
  let rank = ((fraction / 100) * 8) / 10;

  if (fraction === 0) {
    file = file - 1;
    rank = 8;
  }

  return { file, rank };
};

const Piece = ({ player, piece, square, rotate, ...props }) => {
  const { file, rank } = getPisition(square);

  return (
    <S.Piece file={file} rank={rank} rotate={rotate} {...props}>
      <Image player={player} piece={piece} />
    </S.Piece>
  );
};

export default Piece;
