import { DrawType, Player } from '@/types/app.types';

interface GameOverProps {
  winner?: Player;
  draw?: DrawType;
  onRestart: () => void;
}

const GameOver = ({ winner, draw, onRestart }: GameOverProps) => {
  const getWinnerText = () => {
    if (winner) {
      return `${winner === Player.white ? 'White' : 'Black'} Wins!`;
    }
    if (draw) {
      return 'Draw!';
    }
  };

  return (
    <div className="bg-ui-background absolute z-20 p-20 flex flex-col items-center justify-center">
      <h2 className="text-ui-text-primary text-2xl mb-4">{getWinnerText()}</h2>
      {draw && <p className="text-ui-text-secondary">By {draw}</p>}
      <button
        className="px-4 py-2 rounded bg-buttons-primary text-ui-text-primary"
        onClick={onRestart}
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
