import { updatePosition } from "./move.js"
import { draw } from "./draw.js"
import { Player } from "./player.js"
import { Ball } from "./ball.js"

let players: Player[] = [
	new Player("alpha", 10, 250, "w", "s"),
	new Player("beta", 770, 250, "ArrowUp", "ArrowDown")
];

let ball: Ball = new Ball(400, 300);

export function gameLoop()
{
	updatePosition(players, ball);
	draw(players, ball);
	requestAnimationFrame(gameLoop);
}
