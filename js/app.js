// Variables
const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail");

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
  //console.log((e.target.type))
  if (e.target.value.length > 0) {
    console.log("Si hay algo");
  } else {
    // e.target.style.borderBottomColor = "red";
    // e.target.classList.add('error') // añade la clase error
    e.target.classList.add("border", "border-red-500");

    mostrarError("Todos los campos son obligatorios");
  }
  if (e.target.type === "email") {
    const resultado = e.target.value.indexOf("@");
    if (resultado < 0) {
      mostrarError("El email no es válido");
    }
    //console.log(resultado);
  }
}

function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add(
    "border",
    "border-red-500",
    "background-color-100",
    "text-red-500",
    "p-3",
    // "mt-5",
    "mb-5",
    "text-center",
    "error",
  );
  const errores = document.querySelectorAll(".error");
  if (errores.length === 0) {
    //formulario.appendChild(mensajeError);
    formulario.insertBefore(mensajeError, document.querySelector(".mb-10"));
  }
}
