import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { GameProgress, createGameProgress } from './createGameProgress';
import { GameSetup, createGameSetup } from './createGameSetup';

type CombinedState = GameSetup & GameProgress;

export const useChessStore = create<CombinedState>()(
  devtools(
    (...a) => ({
      ...createGameSetup(...a),
      ...createGameProgress(...a),
    }),
    {
      name: 'chess-storage',
    }
  )
);
