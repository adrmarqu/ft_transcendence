import { gameLoop } from "./game.js"

const button = document.getElementById("start");

if (button)
	button.addEventListener("click", main);

function show(id: string)
{
	const b = document.querySelectorAll(".b");
	b.forEach(c => c.classList.add(".hidden"));

	const a = document.getElementById(id);
	a.classList.remove(".hidden");

	if (id == "Game")
	{
		const c = a.querySelector("canvas") as HTMLCanvasElement | null;
		if (c)
		{
			c.width = 800;
			c.width = 600;
		}
	}
	window.alert("Torneo empezado");

}

function main()
{
	show("Game");
	gameLoop();
	/*
	switch (web.state)
	{
		case "menu":
			console.log("Menu");
			break;
		case "game":
			gameLoop();
			break;
		case "exit":
			console.log("Exiting game!")
			break;
		default:
			throw new Error("Unknown error");
	}*/
}

// Width: 800, height: 600
