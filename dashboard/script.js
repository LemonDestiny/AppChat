let input = document.querySelector("input");
let boton = document.getElementById("botonEnviar");
let mensajes = document.getElementById("historial");
let plantilla = `<div class={clase}>
                  <h3>{nombre}</h3>
                  <p>{mensaje}</p>
                </div>`;

boton.addEventListener("click", () => {
  remplazaMensaje("personal", input.value, "Me");
  remplazaMensaje("otraPersona", "hola carlos todo bien", "Ricardo");
});

input.addEventListener("keypress", (evento) => {
  if (evento.key === "Enter" && !mensajeVacio(input.value)) {
    remplazaMensaje("personal", input.value, "Me");
    remplazaMensaje("otraPersona", "hola carlos todo bien", "Ricardo");
    input.value = "";
  }
});

function mensajeVacio(cadena) {
  return cadena.trim() === "";
}

function remplazaMensaje(clase, mensaje, persona) {
  let mensajeNuevo = plantilla
    .replace("{mensaje}", mensaje)
    .replace("{nombre}", persona)
    .replace("{clase}", clase);
  let contenedor = document.createElement("div");
  contenedor.innerHTML = mensajeNuevo;
  mensajes.appendChild(contenedor);
  mensajes.scrollTo(0, mensajes.scrollHeight);
}
