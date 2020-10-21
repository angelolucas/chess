import styled from 'styled-components';
import PropTypes from 'prop-types';

const LegalMove = styled.div(({ position, theme: { color } }) => {
  const [file, rank] = [...position.toString()].map(Number);

  return {
    transform: `translate(${(file - 1) * 100}%, ${-(rank - 1) * 100}%)`,
    width: '12.5%',
    height: '12.5%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 2,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    ':before': {
      content: '""',
      background: `${color.detail}33`,
      borderRadius: '50%',
      width: 30,
      height: 30,
    },
  };
});

LegalMove.propTypes = {
  position: PropTypes.number,
};

export default LegalMove;
