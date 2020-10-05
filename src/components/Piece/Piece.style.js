import styled from 'styled-components';

export const Piece = styled.div(({ file, rank, rotate, theme: { color } }) => ({
  width: '12.5%',
  height: '12.5%',
  transition: 'transform 0.2s',
  transform: `
    translate(${(rank - 1) * 100}%, ${(file - 1) * 100}%)
    rotate(${rotate ? '180deg' : '0deg'})
  `,
  position: 'absolute',
  left: 0,
  top: 0,
  cursor: 'pointer',

  ':focus': {
    boxShadow: `inset 0px 0px 0px 2px ${color.detail}99,
    0px 0px 0px 2px ${color.detail}99`,
    outline: 'none',
  },

  svg: {
    width: '100%',
    height: '100%',
  },
}));
