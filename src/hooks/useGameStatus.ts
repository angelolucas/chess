import { checkGameStatus } from '@/rules/gameStatus/checkGameStatus';
import { useChessStore } from '@/store/useChessStore';
import { Player } from '@/types/app.types';
import { useEffect } from 'react';

export const useGameStatus = () => {
  const boardPosition = useChessStore((state) => state.boardPosition);
  const boardHistory = useChessStore((state) => state.boardHistory);
  const gameStarted = useChessStore((state) => state.gameStarted);
  const currentPlayer = useChessStore((state) => state.currentPlayer);
  const isCheck = useChessStore((state) => state.isCheck);
  const setIsCheck = useChessStore((state) => state.setIsCheck);
  const isCheckmate = useChessStore((state) => state.isCheckmate);
  const setIsCheckmate = useChessStore((state) => state.setIsCheckmate);
  const setWinner = useChessStore((state) => state.setWinner);
  const setDraw = useChessStore((state) => state.setDraw);
  const fiftyMoveRuleCounter = useChessStore(
    (state) => state.fiftyMoveRuleCounter
  );

  useEffect(() => {
    if (gameStarted) {
      const gameStatus = checkGameStatus({
        boardPosition,
        boardHistory,
        fiftyMoveRuleCounter,
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
    boardHistory,
    boardPosition,
    currentPlayer,
    fiftyMoveRuleCounter,
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
