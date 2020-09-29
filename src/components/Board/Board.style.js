import styled from 'styled-components';

export const Board = styled.div(({ rotate, theme: { color } }) => ({
  backgroundColor: color.light,
  boxSizing: 'border-box',
  display: 'flex',
  border: `5px solid ${color.light}`,
  margin: '5vmin auto',
  width: '90vmin',
  height: '90vmin',
  position: 'relative',
  transform: rotate && 'rotate(180deg)',
}));
