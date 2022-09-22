// Variables
const btnEnviar = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");
const formularioEnviar = document.querySelector("#enviar-mail");

// Variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners() {
  // Cuando la app arranca
  document.addEventListener("DOMContentLoaded", iniciarApp);
  // Campos del formulario
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);

  // Reinicia el formulario
  btnReset.addEventListener("click", resetearFormulario);

  // Enviar email
  formularioEnviar.addEventListener("submit", enviarEmail);
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
    // Elimina los errores...
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }

    e.target.classList.remove("border", "border-red-500");
    e.target.classList.add("border", "border-green-500");
  } else {
    // e.target.style.borderBottomColor = "red";
    // e.target.classList.add('error') // añade la clase error
    e.target.classList.remove("border", "border-green-500");
    e.target.classList.add("border", "border-red-500");

    mostrarError("Todos los campos son obligatorios");
  }
  if (e.target.type === "email") {
    if (er.test(e.target.value)) {
      // Elimina los errores...
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      }

      e.target.classList.remove("border", "border-red-500");
      e.target.classList.add("border", "border-green-500");
    } else {
      e.target.classList.remove("border", "border-green-500");
      e.target.classList.add("border", "border-red-500");
      mostrarError("Email no válido");
    }

    /*   const resultado = e.target.value.indexOf("@");
    if (resultado < 0) {
      mostrarError("El email no es válido");
    } */
    //console.log(resultado);
  }

  if (
    er.test(email.value) !== "" &&
    asunto.value !== "" &&
    mensaje.value !== ""
  ) {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
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
    formularioEnviar.insertBefore(
      mensajeError,
      document.querySelector(".mb-10"),
    );
  }
}

// Envia el email
function enviarEmail(e) {
  e.preventDefault();

  // Mostrar el spinner
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  // Después de 3 segundos ocultar el spinner y mostrar el mensaje
  setTimeout(() => {
    spinner.style.display = "none";
    // Mensaje que dice que se envió correctamente
    const parrafo = document.createElement("p");
    parrafo.textContent = "El mensaje se envió correctamente";
    parrafo.classList.add(
      "text-center",
      "my-10",
      "p-2",
      "bg-green-500",
      "text-white",
      "font-bold",
      "uppercase",
    );
    // Inserta el parrafo antes del spinner
    formularioEnviar.insertBefore(parrafo, spinner);

    // Elimina el mensaje de éxito
    setTimeout(() => {
      parrafo.remove();
      formularioEnviar.reset();
    }, 1000);
  }, 3000);
}

// Función que resetea el formulario
function resetearFormulario(e) {
  formularioEnviar.reset();
  e.preventDefault();
}
