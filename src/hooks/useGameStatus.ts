import { checkGameStatus } from '@/rules/gameStatus/checkGameStatus';
import { useChessStore } from '@/store/useChessStore';
import { Player } from '@/types/app.types';
import { useEffect } from 'react';

export const useGameStatus = () => {
  const boardPosition = useChessStore((state) => state.boardPosition);
  const gameStarted = useChessStore((state) => state.gameStarted);
  const currentPlayer = useChessStore((state) => state.currentPlayer);
  const isCheck = useChessStore((state) => state.isCheck);
  const updateIsCheck = useChessStore((state) => state.updateIsCheck);
  const isCheckmate = useChessStore((state) => state.isCheckmate);
  const updateIsCheckmate = useChessStore((state) => state.updateIsCheckmate);
  const updateWinner = useChessStore((state) => state.updateWinner);
  const updateDraw = useChessStore((state) => state.updateDraw);

  useEffect(() => {
    if (gameStarted) {
      const gameStatus = checkGameStatus({
        boardPosition,
        player: currentPlayer,
      });

      updateIsCheck(gameStatus.isCheck);

      if (gameStatus.isCheckmate) {
        updateIsCheckmate(true);
        updateWinner(
          currentPlayer === Player.white ? Player.black : Player.white
        );
      }

      if (gameStatus.drawType) {
        updateDraw(gameStatus.drawType);
      }
    }
  }, [
    boardPosition,
    currentPlayer,
    gameStarted,
    updateDraw,
    updateIsCheck,
    updateIsCheckmate,
    updateWinner,
  ]);

  return {
    isCheck,
    isCheckmate,
  };
};
