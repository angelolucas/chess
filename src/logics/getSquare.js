export default ({ player = 'white', position, direction }) => {
  const white = player === 'white';

  return {
    'backward-left': white ? position - 11 : position + 11,
    backward: white ? position - 1 : position + 1,
    'backward-right': white ? position + 9 : position - 9,
    left: white ? position - 10 : position + 10,
    right: white ? position + 10 : position - 10,
    'forward-left': white ? position - 9 : position + 9,
    forward: white ? position + 1 : position - 1,
    'forward-right': white ? position + 11 : position - 11,
    'two-forward': white ? position + 2 : position - 2,
  }[direction];
};
