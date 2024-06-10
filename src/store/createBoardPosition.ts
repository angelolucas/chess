import { Piece } from '@/types/app.types';
import { StateCreator } from 'zustand';

export interface BoardPosition {
  boardPosition: Piece[];
  updateBoardPosition: (boardPosition: Piece[]) => void;
}

export const createBoardPosition: StateCreator<BoardPosition> = (set) => ({
  boardPosition: [],
  updateBoardPosition: (boardPosition) => set(() => ({ boardPosition })),
});
