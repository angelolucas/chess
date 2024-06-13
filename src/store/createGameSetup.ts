import { GameMode, Player } from '@/types/app.types';
import { StateCreator } from 'zustand';

export interface GameSetup {
  boardPerspective: Player;
  gameMode: GameMode;
  gameStarted: boolean;
  updateBoardPerspective: (boardPerspective: Player) => void;
  updateGameMode: (gameMode: GameMode) => void;
  updateGameStarted: (gameStarted: boolean) => void;
}

export const createGameSetup: StateCreator<GameSetup> = (set) => ({
  boardPerspective: Player.white,
  gameMode: GameMode.humanVsHuman,
  gameStarted: false,
  updateBoardPerspective: (boardPerspective) =>
    set(() => ({ boardPerspective })),
  updateGameMode: (gameMode) => set(() => ({ gameMode })),
  updateGameStarted: (gameStarted) => set(() => ({ gameStarted })),
});
