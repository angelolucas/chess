export default (square) => {
  const fileExists = square[0] >= 0 && square[0] <= 7;
  const rankExists = square[1] >= 0 && square[1] <= 7;

  return fileExists && rankExists;
};
