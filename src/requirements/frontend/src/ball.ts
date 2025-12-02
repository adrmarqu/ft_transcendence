export class Ball
{
	private				x: number;
	private				y: number;
	private				vx: number;
	private				vy: number;
	
	static readonly		radious: number = 5;
	static readonly		initialSpeed: number = 5;
	static readonly		speed: number = 5;

	constructor(x: number, y: number)
	{
		this.x = x;
		this.y = y;

		const dirX = Math.random() < 0.5 ? -1 : 1;
		const dirY = Math.random() * 2 - 1;
		const leng = Math.sqrt(dirX * dirX + dirY * dirY);
		
		this.vx = (dirX / leng) * Ball.speed;
		this.vy = (dirY / leng) * Ball.speed;
	}

	move()
	{
		this.x += this.vx;
		this.y += this.vy;
	}

	draw(ctx: CanvasRenderingContext2D)
	{
		ctx.beginPath();
		ctx.arc(this.x, this.y, Ball.radious, 0, Math.PI * 2);
		ctx.fill();
	}
}
