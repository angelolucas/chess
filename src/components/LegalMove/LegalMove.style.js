import styled from 'styled-components';
import PropTypes from 'prop-types';

const LegalMove = styled.div(({ position, theme: { color } }) => {
  const [file, rank] = (position / 10).toString().split('.');

  return {
    transform: `translate(${(file - 1) * 100}%, ${-(rank - 1) * 100}%)`,
    boxSizing: 'border-box',
    borderRadius: '50%',
    background: `${color.detail}33`,
    backgroundClip: 'content-box',
    width: '12.5%',
    height: '12.5%',
    padding: 10,
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 2,
    cursor: 'pointer',
  };
});

LegalMove.propTypes = {
  position: PropTypes.number,
};

export default LegalMove;
