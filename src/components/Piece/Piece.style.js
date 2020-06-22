import styled from 'styled-components';

export const Piece = styled.svg(({ square }) => ({
  width: '12.5%',
  height: '12.5%',
  transition: 0.3,
  transform: `translate(${square[0] * 100}%, ${square[1] * 100}%)`,
  background: 'red',
  position: 'absolute',
  left: 0,
  top: 0,
}));
