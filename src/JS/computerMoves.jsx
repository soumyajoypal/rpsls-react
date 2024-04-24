export default function generateCompMoves() {
  const moves = ["paper", "scissors", "rock", "lizard", "spock"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}
