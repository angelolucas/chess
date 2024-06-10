'use client';

import Chess from './Chess';
import Setup from './Setup';
import { useChessStore } from '@/store/useChessStore';

const App = () => {
  const gameStarted = useChessStore((state) => state.gameStarted);

  return (
    <div className="flex justify-center items-center h-full gap-4">
      {!gameStarted && <Setup />}
      <Chess />
    </div>
  );
};

export default App;
