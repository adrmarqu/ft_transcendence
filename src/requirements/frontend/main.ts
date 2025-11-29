const c = document.getElementById("game") as HTMLCanvasElement;
const ctx = c.getContext("2d")!;

let pos: number = 250;
let pos2: number = 250;

let keys: { [key: string]: boolean } = {};

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);


function gameLoop()
{
	if (keys["w"] && pos > 0)
		pos -= 5;
	if (keys["s"] && pos < 500)
		pos += 5;
	if (keys["ArrowUp"] && pos2 > 0)
		pos2 -= 5;
	if (keys["ArrowDown"] && pos2 < 500)
		pos2 += 5;

	ctx.clearRect(0, 0, c.width, c.height);
	
	// Left player

	ctx.fillStyle = "white";
	ctx.fillRect(10, pos, 20, 100);

	// Right player

	ctx.fillStyle = "white";
	ctx.fillRect(770, pos2, 20, 100);

	// Ball

	ctx.beginPath();
	ctx.arc(400, 300, 10, 0, Math.PI * 2);
	ctx.fill();

	requestAnimationFrame(gameLoop);
}
gameLoop();


/* 

width="800" height="600"

			   0
			   |
			0-----width
			   |
			 height


const c = document.getElementById("game") as HTMLCanvasElement;
const ctx = c.getContext("2d");


ctx.clearRect(0, 0, c.width, c.height);

// Left player

ctx.fillStyle = "white";
ctx.fillRect(10, 250, 20, 100);

// Right player

ctx.fillStyle = "white";
ctx.fillRect(770, 250, 20, 100);

// Ball

ctx.beginPath();
ctx.arc(400, 300, 10, 0, Math.PI * 2);
ctx.fill();


// Controles

let rect = {x: 50, y: 50, width: 80, height: 60 };
let dragging = false;
let offsetX = 0;
let offsetY = 0;

function draw()
{
	if (!ctx)
		throw new Error("Unable to get 2D context");
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.fillStyle = "blue";
	ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
}

c.addEventListener("mousedown", (e) => {
	const rectCanvas = c.getBoundingClientRect();
	const mouseX = e.clientX - rectCanvas.left;
	const mouseY = e.clientY - rectCanvas.top;

	if (mouseX > rect.x && mouseX < rect.x + rect.width
	   && mouseY > rect.y && mouseY < rect.y + rect.height)
   {
   		dragging = true;
		offsetX = mouseX - rect.x;
		offsetY = mouseY - rect.y;
   }
});

c.addEventListener("mousemove", (e) => {
	if (dragging)
	{
		const rectCanvas = c.getBoundingClientRect();
    	rect.x = e.clientX - rectCanvas.left - offsetX;
    	rect.y = e.clientY - rectCanvas.top - offsetY;
    	draw();
	}
});

c.addEventListener("mouseup", () => {
	dragging = false;
});

draw();

*/
