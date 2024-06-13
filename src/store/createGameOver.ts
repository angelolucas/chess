import { DrawType, Player } from '@/types/app.types';
import { StateCreator } from 'zustand';

export interface GameOver {
  winner?: Player;
  draw?: DrawType;
  setWinner: (winner?: Player) => void;
  setDraw: (drawType?: DrawType) => void;
}

// Implement the createGameOver state creator
export const createGameOver: StateCreator<GameOver> = (set) => ({
  winner: undefined,
  draw: undefined,
  setWinner: (winner) => set(() => ({ winner })),
  setDraw: (draw) => set(() => ({ draw })),
});
