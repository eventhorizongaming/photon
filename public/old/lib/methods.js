import { RootNode } from "./src/nodes/RootNode.js";

export async function newGame() {
  const game = new RootNode();
  await game.init();

  return game;
}

export { newGame as new };