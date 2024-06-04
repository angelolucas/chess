'use client';

import { useState } from 'react';
import Chess from './Chess';
import Setup from './Setup';
import { Player } from '@/types/app.types';

const App = () => {
  const [player, setPlayer] = useState<Player>(Player.white);
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="flex justify-center items-center h-full gap-4">
      {!gameStarted && (
        <Setup
          onStart={() => setGameStarted(true)}
          onChangePlayer={setPlayer}
        />
      )}
      <Chess player={player} gameStarted={gameStarted} />
    </div>
  );
};

export default App;
