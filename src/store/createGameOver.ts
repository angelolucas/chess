import { DrawType, Player } from '@/types/app.types';
import { StateCreator } from 'zustand';

export interface GameOver {
  winner?: Player;
  draw?: DrawType;
  updateWinner: (winner?: Player) => void;
  updateDraw: (drawType?: DrawType) => void;
}

// Implement the createGameOver state creator
export const createGameOver: StateCreator<GameOver> = (set) => ({
  winner: undefined,
  draw: undefined,
  updateWinner: (winner) => set(() => ({ winner })),
  updateDraw: (draw) => set(() => ({ draw })),
});
