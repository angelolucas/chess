import move from 'logics/move';
import check from 'logics/check';
import longRangePiece from './longRangePiece';
import knight from './knight';
import king from './king';
import pawn from './pawn';

const enemy = (player) => (player === 'white' ? 'black' : 'white');

export default ({ piece, pieces, player, pinnedPieces }) => {
  let moves = [];

  if (['rook', 'bishop', 'queen'].includes(piece.type)) {
    moves = longRangePiece({ piece, pieces });
  }
  if (piece.type === 'knight') {
    moves = knight({ piece, pieces });
  }
  if (piece.type === 'king') {
    moves = king({ piece, pieces });
  }
  if (piece.type === 'pawn') {
    moves = pawn({ piece, pieces });
  }

  if (pinnedPieces && player && player !== piece.player) {
    moves = moves.filter((legalMove) => {
      const test = move({
        from: piece.position,
        to: legalMove,
        pieces,
        pinnedPieces: false,
      });

      return !check({ player: enemy(player), pieces: test });
    });
  }

  return moves;
};
