import styled from 'styled-components';

export const Piece = styled.div(
  ({
    file,
    rank,
    rotate,
    checked,
    checkmated,
    promotion,
    theme: { color },
  }) => {
    const highlightColor = () => {
      if (checkmated) return color.checkmate;
      if (checked) return color.check;
      return 'transparent';
    };

    return {
      background: promotion ? color.lighter : 'transparent',
      outline: promotion ? `1px solid ${color.lighter}` : 'none',
      width: '12.5%',
      height: '12.5%',
      transition: 'transform 0.2s',
      transform: `
    translate(${(file - 1) * 100}%, ${-(rank - 1) * 100}%)
    rotate(${rotate ? '180deg' : '0deg'})
  `,
      position: 'absolute',
      left: 0,
      bottom: 0,
      cursor: 'pointer',
      boxShadow: `inset 0px 0px 0px 2px ${highlightColor()},
    0px 0px 0px 2px ${highlightColor()}`,

      ':focus': {
        boxShadow: `inset 0px 0px 0px 2px ${color.detail}99,
    0px 0px 0px 2px ${color.detail}99`,
      },

      svg: {
        width: '100%',
        height: '100%',
      },
    };
  }
);
