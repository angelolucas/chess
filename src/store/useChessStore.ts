import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { GameProgress, createGameProgress } from './createGameProgress';
import { GameSetup, createGameSetup } from './createGameSetup';
import { GameOver, createGameOver } from './createGameOver';
import { GameReset, createGameReset } from './createGameReset';

export type CombinedState = GameSetup & GameProgress & GameOver & GameReset;

export const useChessStore = create<CombinedState>()(
  devtools(
    (...actions) => ({
      ...createGameSetup(...actions),
      ...createGameProgress(...actions),
      ...createGameOver(...actions),
      ...createGameReset(...actions),
    }),
    {
      name: 'chess-storage',
    }
  )
);
