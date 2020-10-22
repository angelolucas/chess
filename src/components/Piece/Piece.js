import React from 'react';
import PropTypes from 'prop-types';
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

const Image = ({ color, type }) =>
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
  }[`${color}-${type}`]);

const Piece = ({
  color,
  type,
  position,
  rotate,
  checked,
  checkmated,
  promotion,
  ...props
}) => {
  const [file, rank] = [...position.toString()].map(Number);

  return (
    <S.Piece
      file={file}
      rank={rank}
      rotate={rotate}
      checked={checked}
      checkmated={checkmated}
      promotion={promotion}
      {...props}
    >
      <Image color={color} type={type} />
    </S.Piece>
  );
};

Piece.propTypes = {
  color: PropTypes.oneOf(['white', 'black']).isRequired,
  type: PropTypes.oneOf(['rook', 'knight', 'bishop', 'queen', 'king', 'pawn'])
    .isRequired,
  position: PropTypes.number.isRequired,
  rotate: PropTypes.bool,
  checked: PropTypes.bool,
  checkmated: PropTypes.bool,
  promotion: PropTypes.bool,
};

export default Piece;
