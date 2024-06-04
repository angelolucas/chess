'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Board from './Board';
import { initialPosition } from '@/constants/initialPosition';
import {
  GameMode,
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
import { check } from '@/rules/check';
import clsx from 'clsx';

interface ChessProps {
  player: Player;
  gameMode: GameMode;
  gameStarted: boolean;
}

const Chess = ({ player, gameMode, gameStarted }: ChessProps) => {
  const [currentPlayer, setCurrentPlayer] = useState<Player>(player);

  const initialPositionWithMoves = useMemo(
    () =>
      initialPosition.map((piece) => ({
        ...piece,
        moves: legalMoves({
          player: currentPlayer,
          piece,
          boardPosition: initialPosition,
        }),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const [boardPosition, setBoardPosition] = useState<Array<PieceProps>>(
    initialPositionWithMoves
  );
  const [selectedPiece, setSelectedPiece] = useState<PieceProps | null>(null);
  const [promotion, setPromotion] = useState<{
    piece: PieceProps;
    square: number;
  } | null>(null);
  const playerMoves = useMemo(
    () =>
      boardPosition.find(
        (piece) => piece.player === currentPlayer && piece.moves.length
      ),
    [boardPosition, currentPlayer]
  );

  const checked = useMemo(
    () =>
      check({
        player: currentPlayer,
        boardPosition,
      }),
    [boardPosition, currentPlayer]
  );

  const checkmated = useMemo(
    () => checked && !playerMoves,
    [checked, playerMoves]
  );

  const handlePieceSelection = (piece: PieceProps) => {
    if (gameMode === GameMode.computerVsComputer) return;
    if (gameMode === GameMode.humanVsComputer && currentPlayer !== player)
      return;

    setSelectedPiece(piece.player === currentPlayer ? piece : null);
  };

  const handleMove = useCallback(
    ({
      piece,
      move,
      promotionPiece,
    }: {
      piece: PieceProps;
      move: MoveProps;
      promotionPiece?: PieceType;
    }) => {
      if (move.type === MoveType.promotion) {
        setPromotion({ piece, square: move.square });
      } else {
        const opponent =
          currentPlayer === Player.white ? Player.black : Player.white;
        setSelectedPiece(null);
        setBoardPosition(
          newBoardPosition({
            player: currentPlayer,
            piece,
            move,
            boardPosition,
            promotionPiece,
          })
        );
        setCurrentPlayer(opponent);
      }
    },
    [boardPosition, currentPlayer]
  );

  const handleEngineMove = useCallback(
    (player: Player) => {
      const pieces = boardPosition.filter(
        (piece) => piece.player === player && piece.moves.length
      );
      const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
      const randomMove =
        randomPiece.moves[Math.floor(Math.random() * randomPiece.moves.length)];

      if (randomMove.type === MoveType.promotion) {
        handleMove({
          piece: randomPiece,
          move: { square: randomMove.square },
          promotionPiece: PieceType.queen,
        });
      } else {
        handleMove({ piece: randomPiece, move: randomMove });
      }
    },
    [boardPosition, handleMove]
  );

  useEffect(() => {
    if (!playerMoves || !gameStarted) return;

    if (
      (gameMode === GameMode.computerVsComputer && gameStarted) ||
      (gameMode === GameMode.humanVsComputer && currentPlayer !== player)
    ) {
      setTimeout(() => {
        handleEngineMove(currentPlayer);
      }, 300);
    }
  }, [
    currentPlayer,
    gameMode,
    gameStarted,
    handleEngineMove,
    player,
    playerMoves,
  ]);

  useEffect(() => {
    setSelectedPiece(null);
    setCurrentPlayer(player);
  }, [player]);

  return (
    <div
      className={clsx('relative transition-transform duration-500', {
        '-rotate-180': player === Player.black,
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
            rotate={player === Player.black}
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
