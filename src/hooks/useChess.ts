import { useCallback, useEffect, useMemo, useState } from 'react';
import { initialPosition } from '@/constants/initialPosition';
import {
  GameMode,
  Move as MoveProps,
  MoveType,
  Piece as PieceProps,
  PieceType,
  Player,
} from '@/types/app.types';
import { newBoardPosition } from '@/rules/newBoardPosition';
import { legalMoves } from '@/rules/legalMoves';
import { useChessStore } from '@/store/useChessStore';

const useChess = () => {
  const boardPerspective = useChessStore((state) => state.boardPerspective);
  const gameMode = useChessStore((state) => state.gameMode);
  const gameStarted = useChessStore((state) => state.gameStarted);
  const currentPlayer = useChessStore((state) => state.currentPlayer);
  const updateCurrentPlayer = useChessStore(
    (state) => state.updateCurrentPlayer
  );
  const boardPosition = useChessStore((state) => state.boardPosition);
  const updateBoardPosition = useChessStore(
    (state) => state.updateBoardPosition
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

  const handlePieceSelection = (piece: PieceProps) => {
    if (gameMode === GameMode.computerVsComputer) return;
    if (
      gameMode === GameMode.humanVsComputer &&
      currentPlayer !== boardPerspective
    )
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
        updateBoardPosition(
          newBoardPosition({
            player: currentPlayer,
            piece,
            move,
            boardPosition,
            promotionPiece,
          })
        );
        updateCurrentPlayer(opponent);
      }
    },
    [boardPosition, currentPlayer, updateBoardPosition, updateCurrentPlayer]
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
      (gameMode === GameMode.humanVsComputer &&
        currentPlayer !== boardPerspective)
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
    boardPerspective,
    playerMoves,
  ]);

  useEffect(() => {
    setSelectedPiece(null);
    updateCurrentPlayer(boardPerspective);
  }, [boardPerspective, updateCurrentPlayer]);

  // Set initial moves
  useEffect(() => {
    if (gameStarted) {
      updateBoardPosition(
        initialPosition.map((piece) => ({
          ...piece,
          moves: legalMoves({
            player: currentPlayer,
            piece,
            boardPosition: initialPosition,
          }),
        }))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStarted]);

  return {
    boardPosition,
    boardPerspective,
    gameMode,
    gameStarted,
    currentPlayer,
    selectedPiece,
    promotion,
    playerMoves,
    handlePieceSelection,
    handleMove,
    handleEngineMove,
    setSelectedPiece,
    setPromotion,
  };
};

export default useChess;
