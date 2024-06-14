import { Piece, Player } from '@/types/app.types';
import { verifyDraw } from './verifyDraw';
import { verifyCheck } from './verifyCheck';
import { verifyCheckmate } from './verifyCheckmate';

interface VerifyCheck {
  boardPosition: Piece[];
  boardHistory: Piece[][];
  player: Player;
}

export const checkGameStatus = ({
  boardPosition,
  boardHistory,
  player,
}: VerifyCheck) => {
  const hasPlayerMoves = !!boardPosition.find(
    (piece) => piece.player === player && piece.moves.length
  );

  const isCheck = verifyCheck({
    player,
    boardPosition,
  });
  const isCheckmate = verifyCheckmate({ isCheck, hasPlayerMoves });
  const drawType = verifyDraw({
    boardPosition,
    boardHistory,
    isCheck,
    hasPlayerMoves,
  });

  return {
    isCheck,
    isCheckmate,
    drawType,
  };
};
