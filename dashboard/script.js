let input = document.querySelector("input");
let boton = document.getElementById("botonEnviar");
let mensajes = document.getElementById("historial");

boton.addEventListener("click", () => {
  mensajes.textContent += input.value + "\n";
});

input.addEventListener("keypress", (evento) => {
  if (evento.key === "Enter") {
    mensajes.textContent += input.value + "\n";
    input.value =""
  }
});