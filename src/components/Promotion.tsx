import { PieceType, Player } from '@/types/app.types';
import Piece from './Piece';

interface PromotionProps {
  player: Player;
  square: number;
  onPromote: (type: PieceType) => void;
  onClose: () => void;
}

const Promotion = ({ player, square, onPromote, onClose }: PromotionProps) => {
  const pieces: PieceType[] = [
    PieceType.queen,
    PieceType.rook,
    PieceType.bishop,
    PieceType.knight,
  ];

  return (
    <div className="w-full h-full inset-0 absolute" onClick={onClose}>
      {pieces.map((type, index) => {
        const position =
          player === Player.white ? square + index * 10 : square - index * 10;

        return (
          <div key={type}>
            <Piece
              player={player}
              type={type}
              position={position}
              isPromotion={true}
              onClick={() => onPromote(type)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Promotion;
