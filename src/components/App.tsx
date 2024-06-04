'use client';

import { useState } from 'react';
import Chess from './Chess';
import Setup from './Setup';
import { GameMode, Player } from '@/types/app.types';

const App = () => {
  const [player, setPlayer] = useState<Player>(Player.white);
  const [mode, setMode] = useState<GameMode>(GameMode.humanVsComputer);
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="flex justify-center items-center h-full gap-4">
      {!gameStarted && (
        <Setup
          onStart={({ mode }) => {
            setMode(mode);
            setGameStarted(true);
          }}
          onChangePlayer={setPlayer}
        />
      )}
      <Chess player={player} gameStarted={gameStarted} gameMode={mode} />
    </div>
  );
};

export default App;
