import styled from "styled-components";

export const Board = styled.div({
  display: "flex",
  border: "5px solid #8b9dc3",
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
  backgroundColor: "#dfe3ee",
  position: "relative",

  [`${Column}:nth-child(even) &:nth-child(odd), 
    ${Column}:nth-child(odd) &:nth-child(even)`]: {
    background: "#8b9dc3",
  },

  ":focus": {
    boxShadow: "inset 0 0 0 5px #3b5998",
    outline: "none",
  },

  svg: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
});
