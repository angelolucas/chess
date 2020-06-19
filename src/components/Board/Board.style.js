import styled from 'styled-components';
import patter from 'assets/board.svg';

export const Board = styled.div({
  backgroundImage: `url(${patter})`,
  backgroundColor: '#5292a0',
  backgroundSize: 'calc(25% + 1px)',
  boxSizing: 'border-box',
  display: 'flex',
  border: '5px solid black',
  margin: '5vmin auto',
  width: '90vmin',
  height: '90vmin',
});
