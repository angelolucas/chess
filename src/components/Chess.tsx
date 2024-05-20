'use client';

import { useState } from 'react';
import Board from './Board';
import { initialPosition } from '@/constants/initialPosition';
import { Piece as PieceProps, Position } from '@/types/app.types';
import Piece from './Piece';
import Move from './Move';

const Chess = () => {
  const [pieces, setPieces] = useState<Array<PieceProps>>(initialPosition);
  const [selectedPiece, setSelectedPiece] = useState<PieceProps | null>(null);

  const handlePieceSelection = (piece: PieceProps) => {
    setSelectedPiece(piece);
  };

  const handleMove = (piece: PieceProps, move: Position) => {
    // TODO: Implement move logic
  };

  return (
    <div className="relative">
      <Board />

      {pieces.map((piece) => (
        <Piece
          key={piece.id}
          player={piece.player}
          type={piece.type}
          position={piece.position}
          selected={selectedPiece ? selectedPiece.id === piece.id : false}
          onClick={() => handlePieceSelection(piece)}
        />
      ))}

      {selectedPiece &&
        selectedPiece.moves.map((move) => (
          <Move
            key={`${move.col}${move.row}`}
            position={move}
            onClick={() => handleMove(selectedPiece, move)}
          />
        ))}
    </div>
  );
};

export default Chess;
