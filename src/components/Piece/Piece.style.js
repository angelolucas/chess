import styled from 'styled-components';

export const Piece = styled.div(
  ({ file, rank, rotate, inCheck, theme: { color } }) => ({
    width: '12.5%',
    height: '12.5%',
    transition: 'transform 0.2s',
    transform: `
    translate(${(file - 1) * 100}%, ${-(rank - 1) * 100}%)
    rotate(${rotate ? '180deg' : '0deg'})
  `,
    position: 'absolute',
    left: 0,
    bottom: 0,
    cursor: 'pointer',
    outline: 'none',
    boxShadow:
      inCheck &&
      `inset 0px 0px 0px 2px ${color.check},
    0px 0px 0px 2px ${color.check}`,

    ':focus': {
      boxShadow: `inset 0px 0px 0px 2px ${color.detail}99,
    0px 0px 0px 2px ${color.detail}99`,
    },

    svg: {
      width: '100%',
      height: '100%',
    },
  })
);
