'use client';

import { useState } from 'react';
import Board from './Board';
import { initialPosition } from '@/constants/initialPosition';
import { Piece as PieceProps } from '@/types/app.types';
import Piece from './Piece';

const Chess = () => {
  const [pieces, setPieces] = useState<Array<PieceProps>>(initialPosition);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);

  const handlePieceSelection = (id: number) => {
    setSelectedPiece(id);
  };

  return (
    <div className="relative">
      <Board />
      {pieces.map(({ id, type, player, position }) => (
        <Piece
          key={id}
          player={player}
          type={type}
          position={position}
          selected={selectedPiece === id}
          onClick={() => handlePieceSelection(id)}
        />
      ))}
    </div>
  );
};

export default Chess;
