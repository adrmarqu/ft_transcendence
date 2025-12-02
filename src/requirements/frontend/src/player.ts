export class Player
{
	private readonly	alias: string;
	private				x: number;
	private				y: number;

	static readonly		width: number = 20;
	static readonly 	height: number = 100;
	static readonly		speed: number = 10;
	static readonly		limit: number = 600;

	private	up: string;
	private	down: string;

	constructor(alias: string, x: number, y: number, up: string, down: string)
	{
		this.alias = alias;
		this.x = x;
		this.y = y;
		this.up = up;
		this.down = down;
	}

	moveUp() { this.y = Math.max(0, this.y - Player.speed); }
	moveDown() { this.y = Math.min(Player.limit - Player.height, this.y + Player.speed); }
	
	draw(ctx: CanvasRenderingContext2D)
	{
		ctx.fillRect(this.x, this.y, Player.width, Player.height);
	}
	
	getUp(): string  { return this.up; }
	getDown(): string  { return this.down; }
	getAlias(): string { return this.alias;	}
}
