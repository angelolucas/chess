import styled from 'styled-components';

export const Piece = styled.svg(({ file, rank }) => ({
  width: '12.5%',
  height: '12.5%',
  transition: 0.3,
  transform: `translate(${file * 100}%, ${rank * 100}%)`,
  background: 'red',
  position: 'absolute',
  left: 0,
  top: 0,
}));
