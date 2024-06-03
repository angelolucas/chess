'use client';

import { useCallback, useMemo, useState } from 'react';
import Board from './Board';
import { initialPosition } from '@/constants/initialPosition';
import {
  Move as MoveProps,
  MoveType,
  Piece as PieceProps,
  PieceType,
  Player,
} from '@/types/app.types';
import Piece from './Piece';
import Move from './Move';
import { newBoardPosition } from '@/rules/newBoardPosition';
import { legalMoves } from '@/rules/legalMoves';
import Promotion from './Promotion';

const Chess = () => {
  const [player, setPlayer] = useState<Player>(Player.white);
  const initialPositionWithMoves = useMemo(
    () =>
      initialPosition.map((piece) => ({
        ...piece,
        moves: legalMoves({ player, piece, boardPosition: initialPosition }),
      })),
    [player]
  );
  const [boardPosition, setBoardPosition] = useState<Array<PieceProps>>(
    initialPositionWithMoves
  );
  const [selectedPiece, setSelectedPiece] = useState<PieceProps | null>(null);
  const [promotion, setPromotion] = useState<{
    piece: PieceProps;
    square: number;
  } | null>(null);

  const handlePieceSelection = (piece: PieceProps) => {
    setSelectedPiece(piece);
  };

  const handleMove = useCallback(
    (piece: PieceProps, move: MoveProps, promotionPiece?: PieceType) => {
      if (move.type === MoveType.promotion) {
        setPromotion({ piece, square: move.square });
      } else {
        setSelectedPiece(null);
        setBoardPosition(
          newBoardPosition({
            player,
            piece,
            move,
            boardPosition,
            promotionPiece,
          })
        );
        setPlayer(player === Player.white ? Player.black : Player.white);
      }
    },
    [boardPosition, player]
  );

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
          key={move.square}
          position={move.square}
          onClick={() => handleMove(selectedPiece, move)}
        />
      ))}

      {promotion && (
        <Promotion
          player={promotion.piece.player}
          square={promotion.square}
          onPromote={(promotionPiece) =>
            handleMove(
              promotion.piece,
              { square: promotion.square },
              promotionPiece
            )
          }
          onClose={() => {
            setPromotion(null);
            setSelectedPiece(null);
          }}
        />
      )}
    </div>
  );
};

export default Chess;
