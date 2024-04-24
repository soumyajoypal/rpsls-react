import { movesData } from "./data/moves";

export function check(playerMove, compMove) {
  if (playerMove === compMove) {
    return "Tie";
  }
  let pMove = movesData.find((move) => move.pMove === playerMove);
  let isWinningMove = pMove.wins.includes(compMove);

  if (isWinningMove) {
    return "You Win";
  }
  return "You Lose";
}
