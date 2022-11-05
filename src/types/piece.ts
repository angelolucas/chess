export interface BasicPiece {
  color: 'white' | 'black';
  type: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  position: number;
}

export interface Piece extends BasicPiece {
  id: number;
  moved: boolean;
  moves: Array<number>;
}
