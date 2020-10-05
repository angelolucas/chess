import styled from 'styled-components';

const getPisition = (square) => {
  const split = (square / 8).toFixed(3).split('.');
  const integer = Number(split[0]);
  const fraction = Number(split[1]);
  let file = integer + 1;
  let rank = ((fraction / 100) * 8) / 10;

  if (fraction === 0) {
    file = file - 1;
    rank = 8;
  }

  return { file, rank };
};

export default styled.div(({ square, theme: { color } }) => {
  const { file, rank } = getPisition(square);

  return {
    transform: `translate(${(rank - 1) * 100}%, ${(file - 1) * 100}%)`,
    boxSizing: 'border-box',
    borderRadius: '50%',
    background: `${color.detail}33`,
    backgroundClip: 'content-box',
    width: '12.5%',
    height: '12.5%',
    padding: 10,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 2,
    cursor: 'pointer',
  };
});
