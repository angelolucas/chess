import styled from 'styled-components';

export default styled.div(({ square, theme: { color } }) => ({
  transform: `translate(${square[0] * 100}%, ${square[1] * 100}%)`,
  boxSizing: 'border-box',
  borderRadius: '50%',
  background: `${color.detail}33`,
  backgroundClip: 'content-box',
  width: '12.5%',
  height: '12.5%',
  padding: 10,
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 2,
}));
