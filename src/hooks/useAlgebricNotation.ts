import { getRowColByPosition } from '@/helpers/getRowColByPosition';
import { useChessStore } from '@/store/useChessStore';
import { MoveType } from '@/types/app.types';
import { useEffect } from 'react';

export const useAlgebricNotation = () => {
  const isCheck = useChessStore((state) => state.isCheck);
  const isCheckmate = useChessStore((state) => state.isCheckmate);
  const isDraw = useChessStore((state) => state.draw);
  const lastMove = useChessStore((state) => state.lastMove);
  const notation = useChessStore((state) => state.notation);
  const setNotation = useChessStore((state) => state.setNotation);

  useEffect(() => {
    if (!lastMove) return;

    console.log({ lastMove });

    let lastNotation = '';

    const { piece, move, promotionPiece } = lastMove;

    if (move.type === MoveType.longCastling) {
      lastNotation = 'O-O-O';
    } else if (move.type === MoveType.shortCastling) {
      lastNotation = 'O-O';
    } else {
      const { row: originRow, col: originCol } = getRowColByPosition(
        piece.position
      );
      const realOriginRow = 9 - originRow;
      const realOriginCol = String.fromCharCode(96 + originCol);

      const { row: targetRow, col: targetCol } = getRowColByPosition(
        move.square
      );

      const realTargetRow = 9 - targetRow;
      const realTargetCol = String.fromCharCode(96 + targetCol);

      const pieceLetter =
        piece.type === 'pawn' ? '' : piece.type.toUpperCase().charAt(0);

      // Piece letter
      lastNotation += pieceLetter;

      // origin
      lastNotation += realOriginCol;
      lastNotation += realOriginRow;

      // capture
      if (move.type === 'capture') {
        lastNotation += 'x';
      }

      // target
      lastNotation += realTargetCol;
      lastNotation += realTargetRow;

      // Promotion
      if (promotionPiece) {
        lastNotation += `=${promotionPiece.toUpperCase().charAt(0)}`;
      }

      // Check and Checkmate
      if (isCheckmate) {
        lastNotation += '#';
      } else if (isCheck) {
        lastNotation += '+';
      }

      // Draw
      if (isDraw) {
        lastNotation += '1/2-1/2';
      }
    }

    if (piece.player === 'white') {
      setNotation([...notation, [lastNotation]]);
    } else {
      const lastWhiteNotation = notation[notation.length - 1];
      lastWhiteNotation.push(lastNotation);
      setNotation([...notation.slice(0, -1), lastWhiteNotation]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMove]);
};
