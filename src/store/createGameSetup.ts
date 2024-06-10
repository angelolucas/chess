import { GameMode, Player } from '@/types/app.types';
import { StateCreator } from 'zustand';

export interface GameSetup {
  boardPerspective: Player;
  gameMode: GameMode;
  gameStarted: boolean;
  updateBoardPerspective: (boardPerspective: Player) => void;
  updateGameMode: (gameMode: GameMode) => void;
  startGame: () => void;
}

export const createGameSetup: StateCreator<GameSetup> = (set) => ({
  boardPerspective: Player.white,
  gameMode: GameMode.humanVsComputer,
  gameStarted: false,
  updateBoardPerspective: (boardPerspective) =>
    set(() => ({ boardPerspective })),
  updateGameMode: (gameMode) => set(() => ({ gameMode })),
  startGame: () => set(() => ({ gameStarted: true })),
});
