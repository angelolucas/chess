'use client';

import clsx from 'clsx';
import Board from './Board';
import Piece from './Piece';
import Move from './Move';
import Promotion from './Promotion';
import useChess from '@/hooks/useChess';
import { PieceType, Player } from '@/types/app.types';

const Chess = () => {
  const {
    boardPosition,
    boardPerspective,
    gameStarted,
    currentPlayer,
    selectedPiece,
    promotion,
    checked,
    checkmated,
    handlePieceSelection,
    handleMove,
    setSelectedPiece,
    setPromotion,
  } = useChess();

  return (
    <div
      className={clsx('relative transition-transform duration-500', {
        '-rotate-180': boardPerspective === Player.black,
        'pointer-events-none blur-sm': !gameStarted,
      })}
    >
      <Board onClick={() => setSelectedPiece(null)} />

      {boardPosition.map((piece) => {
        const checkHighlight =
          checked &&
          piece.type === PieceType.king &&
          piece.player === currentPlayer;
        const checkmateHighlight =
          checkmated &&
          piece.type === PieceType.king &&
          piece.player === currentPlayer;
        const selectHighlight = selectedPiece
          ? selectedPiece.id === piece.id
          : false;

        return (
          <Piece
            key={piece.id}
            player={piece.player}
            type={piece.type}
            position={piece.position}
            checked={checkHighlight}
            checkmated={checkmateHighlight}
            selected={selectHighlight}
            rotate={boardPerspective === Player.black}
            onClick={() => handlePieceSelection(piece)}
          />
        );
      })}

      {selectedPiece?.moves.map((move) => (
        <Move
          key={move.square}
          position={move.square}
          onClick={() => handleMove({ piece: selectedPiece, move })}
        />
      ))}

      {promotion && (
        <Promotion
          player={promotion.piece.player}
          square={promotion.square}
          onPromote={(promotionPiece) =>
            handleMove({
              piece: promotion.piece,
              move: { square: promotion.square },
              promotionPiece,
            })
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
