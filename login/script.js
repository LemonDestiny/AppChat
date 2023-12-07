const titulo = document.getElementById("titulo");
let textoTitulo = "Bienvenido señor";

const wait = (ms) => {
  return new Promise((success) => setInterval(success, ms));
};
const mostrarTitulo = async () => {
  for (const letra of textoTitulo) {
    await wait(50);
    titulo.textContent += letra;
  }
};
window.onload = () => {
  mostrarTitulo();
};
