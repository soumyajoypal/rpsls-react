export function updateScore(res) {
  if (res === "You Lose") {
    return -1;
  }
  if (res === "Tie") {
    return 0;
  }
  return 1;
}
