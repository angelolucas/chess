'use client';

import Chess from './Chess';
import GameOver from './GameOver';
import Notation from './Notation';
import Setup from './Setup';
import { useChessStore } from '@/store/useChessStore';

const App = () => {
  const gameStarted = useChessStore((state) => state.gameStarted);
  const winner = useChessStore((state) => state.winner);
  const draw = useChessStore((state) => state.draw);
  const gameReset = useChessStore((state) => state.gameReset);
  const gameOver = winner || draw;

  return (
    <div className="flex h-full">
      <div className="flex flex-auto justify-center items-center h-full gap-4">
        {!gameStarted && <Setup />}
        <Chess />
        {gameOver && (
          <GameOver winner={winner} draw={draw} onRestart={gameReset} />
        )}
      </div>
      <div className="w-[300px]">
        <Notation />
      </div>
    </div>
  );
};

export default App;
