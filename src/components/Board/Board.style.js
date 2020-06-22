import styled from 'styled-components';
import patter from 'assets/board.svg';

export const Board = styled.div({
  boxShadow: 'inset 0 0 0 1px black, 0 0 0 9px black',
  backgroundImage: `url(${patter})`,
  backgroundColor: '#5292a0',
  backgroundSize: '25%',
  boxSizing: 'border-box',
  display: 'flex',
  border: '5px solid black',
  margin: '5vmin auto',
  width: '90vmin',
  height: '90vmin',
  position: 'relative',
});
