import { useChessStore } from '@/store/useChessStore';
import { GameMode, Player } from '@/types/app.types';

const Setup = () => {
  const boardPerspective = useChessStore((state) => state.boardPerspective);
  const gameMode = useChessStore((state) => state.gameMode);
  const setBoardPerspective = useChessStore(
    (state) => state.setBoardPerspective
  );
  const setGameMode = useChessStore((state) => state.setGameMode);
  const setGameStarted = useChessStore((state) => state.setGameStarted);

  return (
    <div className="bg-ui-background absolute z-20 p-20 flex flex-col items-center justify-center">
      <h2 className="text-ui-text-primary text-2xl mb-4">Play as</h2>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded bg-buttons-primary text-ui-text-primary ${
            boardPerspective === Player.white ? 'ring-2 ring-ui-borders' : ''
          }`}
          onClick={() => setBoardPerspective(Player.white)}
        >
          White
        </button>
        <button
          className={`px-4 py-2 rounded bg-buttons-secondary text-ui-text-primary ${
            boardPerspective === Player.black ? 'ring-2 ring-ui-borders' : ''
          }`}
          onClick={() => setBoardPerspective(Player.black)}
        >
          Black
        </button>
      </div>
      <h2 className="text-ui-text-primary text-2xl mb-4">Mode</h2>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded bg-buttons-primary text-ui-text-primary ${
            gameMode === GameMode.humanVsHuman ? 'ring-2 ring-ui-borders' : ''
          }`}
          onClick={() => setGameMode(GameMode.humanVsHuman)}
        >
          human Vs Human
        </button>
        <button
          className={`px-4 py-2 rounded bg-buttons-secondary text-ui-text-primary ${
            gameMode === GameMode.humanVsComputer
              ? 'ring-2 ring-ui-borders'
              : ''
          }`}
          onClick={() => setGameMode(GameMode.humanVsComputer)}
        >
          human Vs Computer
        </button>
        <button
          className={`px-4 py-2 rounded bg-buttons-secondary text-ui-text-primary ${
            gameMode === GameMode.computerVsComputer
              ? 'ring-2 ring-ui-borders'
              : ''
          }`}
          onClick={() => setGameMode(GameMode.computerVsComputer)}
        >
          Computer Vs Computer
        </button>
      </div>
      <button
        className="px-4 py-2 rounded bg-buttons-primary text-ui-text-primary"
        onClick={() => setGameStarted(true)}
      >
        Start Game
      </button>
    </div>
  );
};

export default Setup;
