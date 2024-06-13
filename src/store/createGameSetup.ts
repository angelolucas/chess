import { GameMode, Player } from '@/types/app.types';
import { StateCreator } from 'zustand';

export interface GameSetup {
  boardPerspective: Player;
  gameMode: GameMode;
  gameStarted: boolean;
  setBoardPerspective: (boardPerspective: Player) => void;
  setGameMode: (gameMode: GameMode) => void;
  setGameStarted: (gameStarted: boolean) => void;
}

export const createGameSetup: StateCreator<GameSetup> = (set) => ({
  boardPerspective: Player.white,
  gameMode: GameMode.humanVsHuman,
  gameStarted: false,
  setBoardPerspective: (boardPerspective) => set(() => ({ boardPerspective })),
  setGameMode: (gameMode) => set(() => ({ gameMode })),
  setGameStarted: (gameStarted) => set(() => ({ gameStarted })),
});
