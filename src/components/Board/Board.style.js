import styled from 'styled-components';

export const Board = styled.div(({ rotate, theme: { color } }) => ({
  boxShadow: `0 0 0 9px ${color.light}`,
  backgroundColor: color.light,
  boxSizing: 'border-box',
  display: 'flex',
  border: `5px solid ${color.dark}`,
  margin: '5vmin auto',
  width: '90vmin',
  height: '90vmin',
  position: 'relative',
  transform: rotate && 'rotate(180deg)',
}));
