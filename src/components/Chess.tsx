'use client';

import { useState } from 'react';
import Board from './Board';
import { initialPosition } from '@/constants/initialPosition';
import { Piece as PieceProps } from '@/types/app.types';
import Piece from './Piece';
import Move from './Move';
import { newBoardPosition } from '@/rules/newBoardPosition';
import { legalMoves } from '@/rules/legalMoves';

const Chess = () => {
  const [boardPosition, setBoardPosition] = useState<Array<PieceProps>>(
    initialPosition.map((piece) => ({
      ...piece,
      moves: legalMoves({ piece, boardPosition: initialPosition }),
    }))
  );
  const [selectedPiece, setSelectedPiece] = useState<PieceProps | null>(null);

  const handlePieceSelection = (piece: PieceProps) => {
    setSelectedPiece(piece);
  };

  const handleMove = (piece: PieceProps, move: number) => {
    setSelectedPiece(null);
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

      {selectedPiece?.moves.map((move) => (
        <Move
          key={move}
          position={move}
          onClick={() => handleMove(selectedPiece, move)}
        />
      ))}
    </div>
  );
};

export default Chess;
