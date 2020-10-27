import styled from 'styled-components';

export const Board = styled.div(({ rotate, theme: { color, breakpoint } }) => ({
  backgroundColor: color.light,
  boxSizing: 'border-box',
  display: 'flex',
  border: `3px solid ${color.light}`,
  margin: '5vmin auto',
  width: '70vmin',
  height: '70vmin',
  position: 'relative',
  transform: rotate && 'rotate(180deg)',

  [breakpoint.small]: {
    width: '100vmin',
    margin: 0,
    height: '100vmin',
    border: 0,
  },
}));

export const Coordinates = styled.svg(({ theme: { color } }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',

  ['.coordinate-light']: {
    fill: color.dark,
  },
  ['.coordinate-dark']: {
    fill: color.light,
  },
}));
