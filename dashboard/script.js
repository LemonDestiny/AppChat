let input = document.querySelector("input");
let boton = document.getElementById("botonEnviar");
let mensajes = document.getElementById("historial");
let plantilla = `<div class={clase}>
                  <h3>{nombre}</h3>
                  <p>{mensaje}</p>
                </div>`;

let apiKey = "0TgaqcA4YfBR8wVmzr6rqQ==paAxO6YABQgxxzrQ";

boton.addEventListener("click", () => {
  remplazaMensaje("personal", input.value, "Me");
  remplazaMensaje("otraPersona", "hola carlos todo bien", "Ricardo");
});

input.addEventListener("keypress", async (evento) => {
  if (evento.key === "Enter" && !mensajeVacio(input.value)) {
    remplazaMensaje("personal", input.value, "Me");
    input.value = "";
    remplazaMensaje("otraPersona", await obtenerFrase(), "Ricardo");
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
  //let contenedor = document.createElement("div");
  mensajes.innerHTML += mensajeNuevo;
  //mensajes.appendChild(contenedor);
  mensajes.scrollTo(0, mensajes.scrollHeight);
}

async function obtenerFrase() {
  let respuestaApi = await fetch("https://api.api-ninjas.com/v1/chucknorris", {
    headers: { "X-Api-Key": apiKey },
  });
  let frase = await respuestaApi.json();
  return frase.joke;
}
