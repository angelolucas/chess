import styled from 'styled-components';

export const Promotion = styled.div(({ theme: { color } }) => ({
  background: `${color.dark}33`,
  position: 'absolute',
  width: '100%',
  height: '100%',
}));
