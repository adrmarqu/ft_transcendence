import { Player } from "./player.js"
import { Ball } from "./ball.js"

let	keys: { [key: string]: boolean } = {};

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

export function updatePosition(player: Player[], ball: Ball)
{
	player.forEach(p => 
	{
		if (keys[p.getUp()])
			p.moveUp();
		if (keys[p.getDown()])
			p.moveDown();
	});
	ball.move();
}
