import { Piece, Player } from '@/types/app.types';
import { StateCreator } from 'zustand';

export interface GameProgress {
  currentPlayer: Player;
  boardPosition: Piece[];
  boardHistory: Piece[][];
  fiftyMoveRuleCounter: number;
  isCheck: boolean;
  isCheckmate: boolean;
  setCurrentPlayer: (currentPlayer: Player) => void;
  setBoardPosition: (boardPosition: Piece[]) => void;
  setFiftyMoveRuleCounter: (fiftyMoveRuleCounter: number) => void;
  setIsCheck: (isCheck: boolean) => void;
  setIsCheckmate: (isCheckmate: boolean) => void;
}

export const createGameProgress: StateCreator<GameProgress> = (set) => ({
  currentPlayer: Player.white,
  boardPosition: [],
  boardHistory: [],
  fiftyMoveRuleCounter: 0,
  isCheck: false,
  isCheckmate: false,
  setCurrentPlayer: (currentPlayer) => set(() => ({ currentPlayer })),
  setBoardPosition: (boardPosition) =>
    set((state) => ({
      boardPosition,
      boardHistory: [...state.boardHistory, boardPosition],
    })),
  setFiftyMoveRuleCounter: (fiftyMoveRuleCounter) =>
    set(() => ({ fiftyMoveRuleCounter })),
  setIsCheck: (isCheck) => set(() => ({ isCheck })),
  setIsCheckmate: (isCheckmate) => set(() => ({ isCheckmate })),
});
