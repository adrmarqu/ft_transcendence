const btn = document.getElementById("btn") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLParagraphElement;
const canvas = document.getElementById("game") as HTMLCanvasElement;

btn.addEventListener("click", () => {
    output.textContent = "¡TypeScript compilado y funcionando!";
});
