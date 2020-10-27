import queen from './queen';
import rook from './rook';
import bishop from './bishop';
import knight from './knight';
import king from './king';
import pawn from './pawn';

export default ({ piece, pieces, player }) =>
  ({
    queen: queen({ piece, pieces, player }),
    rook: rook({ piece, pieces, player }),
    bishop: bishop({ piece, pieces, player }),
    knight: knight({ piece, pieces, player }),
    pawn: pawn({ piece, pieces, player }),
    king: king({ piece, pieces, player }),
  }[piece.type]);
