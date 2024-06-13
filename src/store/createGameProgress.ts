import { Piece, Player } from '@/types/app.types';
import { StateCreator } from 'zustand';

export interface GameProgress {
  currentPlayer: Player;
  boardPosition: Piece[];
  isCheck: boolean;
  isCheckmate: boolean;
  updateCurrentPlayer: (currentPlayer: Player) => void;
  updateBoardPosition: (boardPosition: Piece[]) => void;
  updateIsCheck: (isCheck: boolean) => void;
  updateIsCheckmate: (isCheckmate: boolean) => void;
}

export const createGameProgress: StateCreator<GameProgress> = (set) => ({
  currentPlayer: Player.white,
  boardPosition: [],
  isCheck: false,
  isCheckmate: false,
  updateCurrentPlayer: (currentPlayer) => set(() => ({ currentPlayer })),
  updateBoardPosition: (boardPosition) => set(() => ({ boardPosition })),
  updateIsCheck: (isCheck) => set(() => ({ isCheck })),
  updateIsCheckmate: (isCheckmate) => set(() => ({ isCheckmate })),
});
