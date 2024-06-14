import { Piece, Player } from '@/types/app.types';
import { StateCreator } from 'zustand';

export interface GameProgress {
  currentPlayer: Player;
  boardPosition: Piece[];
  boardHistory: Piece[][];
  isCheck: boolean;
  isCheckmate: boolean;
  setCurrentPlayer: (currentPlayer: Player) => void;
  setBoardPosition: (boardPosition: Piece[]) => void;
  setIsCheck: (isCheck: boolean) => void;
  setIsCheckmate: (isCheckmate: boolean) => void;
}

export const createGameProgress: StateCreator<GameProgress> = (set) => ({
  currentPlayer: Player.white,
  boardPosition: [],
  boardHistory: [],
  isCheck: false,
  isCheckmate: false,
  setCurrentPlayer: (currentPlayer) => set(() => ({ currentPlayer })),
  setBoardPosition: (boardPosition) =>
    set((state) => ({
      boardPosition,
      boardHistory: [...state.boardHistory, boardPosition],
    })),
  setIsCheck: (isCheck) => set(() => ({ isCheck })),
  setIsCheckmate: (isCheckmate) => set(() => ({ isCheckmate })),
});
