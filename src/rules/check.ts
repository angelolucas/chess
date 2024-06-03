import { Piece, PieceType, Player } from '@/types/app.types';

interface Check {
  boardPosition: Piece[];
  player: Player;
}

export const check = ({ boardPosition, player }: Check) => {
  const king = boardPosition.find(
    (piece) => piece.player === player && piece.type === PieceType.king
  );
  const check = boardPosition.find((piece) =>
    piece.moves.some((move) => move.square === king?.position)
  );

  return !!check;
};
