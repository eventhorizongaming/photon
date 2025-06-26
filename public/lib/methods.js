import { GameNode } from "./src/nodes/GameNode.js";

export async function newGame() {
  const game = new GameNode();
  await game.init();

  return game;
}

export { newGame as new };