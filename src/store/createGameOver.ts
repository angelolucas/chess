import { Piece, Player } from '@/types/app.types';
import { StateCreator } from 'zustand';

export interface GameProgress {
  currentPlayer: Player;
  boardPosition: Piece[];
  updateCurrentPlayer: (currentPlayer: Player) => void;
  updateBoardPosition: (boardPosition: Piece[]) => void;
}

export const createGameProgress: StateCreator<GameProgress> = (set) => ({
  currentPlayer: Player.white,
  boardPosition: [],
  updateCurrentPlayer: (currentPlayer) => set(() => ({ currentPlayer })),
  updateBoardPosition: (boardPosition) => set(() => ({ boardPosition })),
});
