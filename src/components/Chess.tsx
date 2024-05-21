'use client';

import { useState } from 'react';
import Board from './Board';
import { initialPosition } from '@/constants/initialPosition';
import { Piece as PieceProps, Position } from '@/types/app.types';
import Piece from './Piece';
import Move from './Move';
import { newBoardPosition } from '@/rules/newBoardPosition';

const Chess = () => {
  const [boardPosition, setBoardPosition] =
    useState<Array<PieceProps>>(initialPosition);
  const [selectedPiece, setSelectedPiece] = useState<PieceProps | null>(null);

  const handlePieceSelection = (piece: PieceProps) => {
    setSelectedPiece(piece);
  };

  const handleMove = (piece: PieceProps, move: Position) => {
    setBoardPosition(newBoardPosition({ piece, move, boardPosition }));
  };

  return (
    <div className="relative">
      <Board />

      {boardPosition.map((piece) => (
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
