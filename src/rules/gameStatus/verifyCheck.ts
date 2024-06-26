import { Piece, PieceType, Player } from '@/types/app.types';

interface VerifyCheck {
  boardPosition: Piece[];
  player: Player;
}

export const verifyCheck = ({ boardPosition, player }: VerifyCheck) => {
  const king = boardPosition.find(
    (piece) => piece.player === player && piece.type === PieceType.king
  );
  const check = boardPosition.find((piece) =>
    piece.moves.some((move) => move.square === king?.position)
  );

  return !!check;
};
