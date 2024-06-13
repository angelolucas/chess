export const getRowColByPosition = (position: number) => {
  const [row, col] = position.toString().split('').map(Number);

  return { row, col };
};
