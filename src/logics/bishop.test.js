import bishop from './bishop';

describe('bishop', () => {
  it('moves well', () => {
    const board = {
      player: 'white',
      selected: {
        file: 2,
        rank: 2,
        pieceId: 1,
      },
      pieces: {
        1: {
          id: 1,
          player: 'white',
          type: 'bishop',
          file: 2,
          rank: 2,
        },
        2: {
          id: 2,
          player: 'white',
          type: 'bishop',
          file: 0,
          rank: 4,
        },
        3: {
          id: 3,
          player: 'black',
          type: 'bishop',
          file: 4,
          rank: 4,
        },
      },
    };

    expect(bishop(board).sort()).toEqual([
      '00',
      '11',
      '13',
      '31',
      '33',
      '40',
      '44',
    ]);
  });
});
