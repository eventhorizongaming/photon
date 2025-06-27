import * as Photon from './lib/index.js';

window.Photon = Photon; // Expose Photon
console.dir(window.Photon);

const game = await Photon.new();

document.body.appendChild(game.canvas);
console.log(game);
game.renderer.ticker.add((time) => {});


const world = new Photon.WorldNode();
const player = new Photon.SpriteNode("./demo/assets/blob.png");

game.addChild(world);
world.addChild(player);