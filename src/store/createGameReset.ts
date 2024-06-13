import { Player } from '@/types/app.types';
import { StateCreator } from 'zustand';

export interface GameReset {
  gameReset: () => void;
}

export const createGameReset: StateCreator<GameReset> = (set) => ({
  gameReset: () => {
    set((state) => ({
      ...state,
      currentPlayer: Player.white,
      boardPosition: [],
      draw: undefined,
      winner: undefined,
      gameStarted: false,
      isCheck: false,
      isCheckmate: false,
    }));
  },
});
