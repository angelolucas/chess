import styled from "styled-components";

export const Board = styled.div({
  display: "flex",
  border: "5px solid #779559",
  margin: "0 auto",
  width: 400,
  height: 400,
});

export const Column = styled.div({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  flexBasis: 0,
});

export const Square = styled.div({
  flexGrow: 1,
  flexBasis: 0,
  backgroundColor: "#EEEED3",
  position: "relative",

  [`${Column}:nth-child(even) &:nth-child(odd), 
    ${Column}:nth-child(odd) &:nth-child(even)`]: {
    background: "#779559",
  },

  svg: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});
