import styled from 'styled-components';

export const Board = styled.div({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column-reverse',
  border: '5px solid #8b9dc3',
  margin: '0 auto',
  width: '100vw',
  height: '100vw',
});

export const Rank = styled.div({
  display: 'flex',
  flexGrow: 1,
  flexBasis: 0,
});

export const Square = styled.div(({ selected, legalMove }) => ({
  flexGrow: 1,
  flexBasis: 0,
  backgroundColor: '#dfe3ee',
  color: '#11141a',
  position: 'relative',
  fontSize: 12,
  boxShadow: selected ? 'inset 0 0 0 5px rgba(0, 0, 0, 0.15)' : 'none',
  outline: 'none',

  [`${Rank}:nth-child(even) &:nth-child(odd), 
    ${Rank}:nth-child(odd) &:nth-child(even)`]: {
    background: '#8b9dc3',
  },

  svg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },

  ':before': {
    display: legalMove ? 'block' : 'none',
    content: '""',
    background: 'rgba(0, 0, 0, 0.15)',
    position: 'absolute',
    left: '10%',
    top: '10%',
    bottom: '10%',
    right: '10%',
    borderRadius: '50%',
  },
}));
