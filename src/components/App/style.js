import styled from 'styled-components';

export const App = styled.div(({ theme: { color } }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: color.dark,
  color: '#dfe3ee',
  fontFamily: 'Roboto, Arial, sans-serif',
  minHeight: '100vh',
}));
