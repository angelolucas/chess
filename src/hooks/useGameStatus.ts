import { checkGameStatus } from '@/rules/gameStatus/checkGameStatus';
import { useChessStore } from '@/store/useChessStore';
import { Player } from '@/types/app.types';
import { useEffect } from 'react';

export const useGameStatus = () => {
  const boardPosition = useChessStore((state) => state.boardPosition);
  const gameStarted = useChessStore((state) => state.gameStarted);
  const currentPlayer = useChessStore((state) => state.currentPlayer);
  const isCheck = useChessStore((state) => state.isCheck);
  const setIsCheck = useChessStore((state) => state.setIsCheck);
  const isCheckmate = useChessStore((state) => state.isCheckmate);
  const setIsCheckmate = useChessStore((state) => state.setIsCheckmate);
  const setWinner = useChessStore((state) => state.setWinner);
  const setDraw = useChessStore((state) => state.setDraw);

  useEffect(() => {
    if (gameStarted) {
      const gameStatus = checkGameStatus({
        boardPosition,
        player: currentPlayer,
      });

      setIsCheck(gameStatus.isCheck);

      if (gameStatus.isCheckmate) {
        setIsCheckmate(true);
        setWinner(currentPlayer === Player.white ? Player.black : Player.white);
      }

      if (gameStatus.drawType) {
        setDraw(gameStatus.drawType);
      }
    }
  }, [
    boardPosition,
    currentPlayer,
    gameStarted,
    setDraw,
    setIsCheck,
    setIsCheckmate,
    setWinner,
  ]);

  return {
    isCheck,
    isCheckmate,
  };
};
