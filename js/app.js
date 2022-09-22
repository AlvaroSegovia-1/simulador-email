// Variables
const btnEnviar = document.querySelector("#enviar");

// Variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

eventListeners();
function eventListeners() {
  // Cuando la app arranca
  document.addEventListener("DOMContentLoaded", iniciarApp);
  // Campos del formulario
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);
}

// Funciones
function iniciarApp() {
  btnEnviar.disabled = true;
  btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

// Valida el formulario
function validarFormulario(e) {
  //console.log("validando ...");
  //console.log(e.target.value);
  if (e.target.value.length > 0) {
    console.log("Si hay algo");
  } else {
    // e.target.style.borderBottomColor = "red";
    // e.target.classList.add('error') // añade la clase error
    e.target.classList.add("border", "border-red-500");
  }
}
