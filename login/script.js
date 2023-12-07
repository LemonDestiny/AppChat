const titulo = document.getElementById("titulo");
const userInput = document.getElementById("usuario");
const passwordInput = document.getElementById("password");
const logeoBtn = document.getElementById("logearse");

let textoTitulo = "Bienvenido señor";
const usuario = "Ignacio";
const password = "lestrada";
const wait = (ms) => {
  return new Promise((success) => setInterval(success, ms));
};
const mostrarTitulo = async () => {
  for (const letra of textoTitulo) {
    await wait(50);
    titulo.textContent += letra;
  }
};
const logear = () => {
  if (userInput.value === usuario && passwordInput.value === password) {
    alert("Bienvenido Ignacio");
  } else {
    alert("El usuario o la contraseña son incorrectos :c");
  }
};

window.onload = () => {
  mostrarTitulo();
  logeoBtn.addEventListener("click", logear);
};
