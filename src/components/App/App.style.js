import styled from 'styled-components';

export const App = styled.div(({ theme: { color } }) => ({
  display: 'flex',
  background: color.dark,
  color: '#dfe3ee',
  fontFamily: 'Roboto, Arial, sans-serif',
  minHeight: '100vh',
}));
