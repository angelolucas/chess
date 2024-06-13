interface VerifyCheckmate {
  isCheck: boolean;
  hasPlayerMoves: boolean;
}

export const verifyCheckmate = ({
  isCheck,
  hasPlayerMoves,
}: VerifyCheckmate) => {
  return isCheck && !hasPlayerMoves;
};
