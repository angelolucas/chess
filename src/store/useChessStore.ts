import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { BoardPosition, createBoardPosition } from './createBoardPosition';
import { GameSetup, createGameSetup } from './createGameSetup';

type CombinedState = BoardPosition & GameSetup;

export const useChessStore = create<CombinedState>()(
  devtools(
    (...a) => ({
      ...createBoardPosition(...a),
      ...createGameSetup(...a),
    }),
    {
      name: 'chess-storage',
    }
  )
);
