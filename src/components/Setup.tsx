import { GameMode, Player } from '@/types/app.types';
import { useState } from 'react';

interface SetupProps {
  onChangePlayer: (player: Player) => void;
  onStart: ({ player, mode }: { player: Player; mode: GameMode }) => void;
}

const Setup = ({ onChangePlayer, onStart }: SetupProps) => {
  const [player, setPlayer] = useState<Player>(Player.white);
  const [mode, setMode] = useState<GameMode>(GameMode.humanVsComputer);

  const handleChangePlayer = (player: Player) => {
    setPlayer(player);
    onChangePlayer(player);
  };

  const handleChangeMode = (mode: GameMode) => {
    setMode(mode);
  };

  return (
    <div className="bg-ui-background absolute z-20 p-20 flex flex-col items-center justify-center">
      <h2 className="text-ui-text-primary text-2xl mb-4">Play as</h2>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded bg-buttons-primary text-ui-text-primary ${
            player === Player.white ? 'ring-2 ring-ui-borders' : ''
          }`}
          onClick={() => handleChangePlayer(Player.white)}
        >
          White
        </button>
        <button
          className={`px-4 py-2 rounded bg-buttons-secondary text-ui-text-primary ${
            player === Player.black ? 'ring-2 ring-ui-borders' : ''
          }`}
          onClick={() => handleChangePlayer(Player.black)}
        >
          Black
        </button>
      </div>
      <h2 className="text-ui-text-primary text-2xl mb-4">Mode</h2>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded bg-buttons-primary text-ui-text-primary ${
            mode === GameMode.humanVsHuman ? 'ring-2 ring-ui-borders' : ''
          }`}
          onClick={() => handleChangeMode(GameMode.humanVsHuman)}
        >
          human Vs Human
        </button>
        <button
          className={`px-4 py-2 rounded bg-buttons-secondary text-ui-text-primary ${
            mode === GameMode.humanVsComputer ? 'ring-2 ring-ui-borders' : ''
          }`}
          onClick={() => handleChangeMode(GameMode.humanVsComputer)}
        >
          human Vs Computer
        </button>
        <button
          className={`px-4 py-2 rounded bg-buttons-secondary text-ui-text-primary ${
            mode === GameMode.computerVsComputer ? 'ring-2 ring-ui-borders' : ''
          }`}
          onClick={() => handleChangeMode(GameMode.computerVsComputer)}
        >
          Computer Vs Computer
        </button>
      </div>
      <button
        className="px-4 py-2 rounded bg-buttons-primary text-ui-text-primary"
        onClick={() => onStart({ player, mode })}
      >
        Start Game
      </button>
    </div>
  );
};

export default Setup;
