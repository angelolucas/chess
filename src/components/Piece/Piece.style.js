import styled from 'styled-components';

export const Piece = styled.svg(({ square, theme: { color } }) => ({
  width: '12.5%',
  height: '12.5%',
  transition: 'transform 0.3s',
  transform: `translate(${square[0] * 100}%, ${square[1] * 100}%)`,
  position: 'absolute',
  left: 0,
  top: 0,

  ':focus': {
    boxShadow: `inset 0px 0px 0px 2px ${color.detail}99,
    0px 0px 0px 2px ${color.detail}99`,
    outline: 'none',
  },
}));
