const btn = document.getElementById("btn") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLParagraphElement;

btn.addEventListener("click", () => {
    output.textContent = "¡TypeScript compilado y funcionando!";
});
