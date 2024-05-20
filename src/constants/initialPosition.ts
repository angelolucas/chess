import { Piece, PieceType, Player } from '@/types/app.types';

export const initialPosition: Array<Piece> = [
  {
    id: 1,
    player: Player.white,
    type: PieceType.rook,
    position: { row: 7, col: 0 },
    moved: false,
    moves: [
      { row: 5, col: 0 },
      { row: 4, col: 0 },
    ],
  },
  {
    id: 2,
    player: Player.white,
    type: PieceType.knight,
    position: { row: 7, col: 1 },
    moved: false,
    moves: [],
  },
  {
    id: 3,
    player: Player.white,
    type: PieceType.bishop,
    position: { row: 7, col: 2 },
    moved: false,
    moves: [],
  },
  {
    id: 4,
    player: Player.white,
    type: PieceType.queen,
    position: { row: 7, col: 3 },
    moved: false,
    moves: [],
  },
  {
    id: 5,
    player: Player.white,
    type: PieceType.king,
    position: { row: 7, col: 4 },
    moved: false,
    moves: [],
  },
  {
    id: 6,
    player: Player.white,
    type: PieceType.bishop,
    position: { row: 7, col: 5 },
    moved: false,
    moves: [],
  },
  {
    id: 7,
    player: Player.white,
    type: PieceType.knight,
    position: { row: 7, col: 6 },
    moved: false,
    moves: [],
  },
  {
    id: 8,
    player: Player.white,
    type: PieceType.rook,
    position: { row: 7, col: 7 },
    moved: false,
    moves: [],
  },
  {
    id: 9,
    player: Player.white,
    type: PieceType.pawn,
    position: { row: 6, col: 0 },
    moved: false,
    moves: [],
  },
  {
    id: 10,
    player: Player.white,
    type: PieceType.pawn,
    position: { row: 6, col: 1 },
    moved: false,
    moves: [],
  },
  {
    id: 11,
    player: Player.white,
    type: PieceType.pawn,
    position: { row: 6, col: 2 },
    moved: false,
    moves: [],
  },
  {
    id: 12,
    player: Player.white,
    type: PieceType.pawn,
    position: { row: 6, col: 3 },
    moved: false,
    moves: [],
  },
  {
    id: 13,
    player: Player.white,
    type: PieceType.pawn,
    position: { row: 6, col: 4 },
    moved: false,
    moves: [],
  },
  {
    id: 14,
    player: Player.white,
    type: PieceType.pawn,
    position: { row: 6, col: 5 },
    moved: false,
    moves: [],
  },
  {
    id: 15,
    player: Player.white,
    type: PieceType.pawn,
    position: { row: 6, col: 6 },
    moved: false,
    moves: [],
  },
  {
    id: 16,
    player: Player.white,
    type: PieceType.pawn,
    position: { row: 6, col: 7 },
    moved: false,
    moves: [],
  },
  {
    id: 17,
    player: Player.black,
    type: PieceType.rook,
    position: { row: 0, col: 0 },
    moved: false,
    moves: [],
  },
  {
    id: 18,
    player: Player.black,
    type: PieceType.knight,
    position: { row: 0, col: 1 },
    moved: false,
    moves: [],
  },
  {
    id: 19,
    player: Player.black,
    type: PieceType.bishop,
    position: { row: 0, col: 2 },
    moved: false,
    moves: [],
  },
  {
    id: 20,
    player: Player.black,
    type: PieceType.queen,
    position: { row: 0, col: 3 },
    moved: false,
    moves: [],
  },
  {
    id: 21,
    player: Player.black,
    type: PieceType.king,
    position: { row: 0, col: 4 },
    moved: false,
    moves: [],
  },
  {
    id: 22,
    player: Player.black,
    type: PieceType.bishop,
    position: { row: 0, col: 5 },
    moved: false,
    moves: [],
  },
  {
    id: 23,
    player: Player.black,
    type: PieceType.knight,
    position: { row: 0, col: 6 },
    moved: false,
    moves: [],
  },
  {
    id: 24,
    player: Player.black,
    type: PieceType.rook,
    position: { row: 0, col: 7 },
    moved: false,
    moves: [],
  },
  {
    id: 25,
    player: Player.black,
    type: PieceType.pawn,
    position: { row: 1, col: 0 },
    moved: false,
    moves: [],
  },
  {
    id: 26,
    player: Player.black,
    type: PieceType.pawn,
    position: { row: 1, col: 1 },
    moved: false,
    moves: [],
  },
  {
    id: 27,
    player: Player.black,
    type: PieceType.pawn,
    position: { row: 1, col: 2 },
    moved: false,
    moves: [],
  },
  {
    id: 28,
    player: Player.black,
    type: PieceType.pawn,
    position: { row: 1, col: 3 },
    moved: false,
    moves: [],
  },
  {
    id: 29,
    player: Player.black,
    type: PieceType.pawn,
    position: { row: 1, col: 4 },
    moved: false,
    moves: [],
  },
  {
    id: 30,
    player: Player.black,
    type: PieceType.pawn,
    position: { row: 1, col: 5 },
    moved: false,
    moves: [],
  },
  {
    id: 31,
    player: Player.black,
    type: PieceType.pawn,
    position: { row: 1, col: 6 },
    moved: false,
    moves: [],
  },
  {
    id: 32,
    player: Player.black,
    type: PieceType.pawn,
    position: { row: 1, col: 7 },
    moved: false,
    moves: [],
  },
];