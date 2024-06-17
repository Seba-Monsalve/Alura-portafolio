//Haz tú validación en javascript acá


import { tiposError, mensajes } from "./customErrors.js";

const camposDeFormulario = document.querySelectorAll("[required]");
const btnSubmit = document.querySelector("[type=submit]");
const form = document.getElementById("form");

btnSubmit.classList.add("disable");


camposDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
  campo.addEventListener("change", (evento) => {
    evento.preventDefault()
    if (!hayErrores()) {
      btnSubmit.classList.remove("disable");
    }
  });
});

const hayErrores = () => {
  let hayError = false;
  camposDeFormulario.forEach(campo => {
    if (!campo.checkValidity()) {
      hayError = true;
    }
  })
  return hayError;
}


btnSubmit.addEventListener('click', (e) => {
  if (!hayErrores()) {
    alert('Enviado con exito')
    camposDeFormulario.forEach(campo => { campo.setCustomValidity("") }
    )
    form.reset();
    btnSubmit.classList.add("disable");
  }
});



function verificarCampo(campo) {
  let mensaje = "";
  campo.setCustomValidity("");

  //campos validity
  tiposError.forEach((error) => {
    if (campo.validity[error]) {
      mensaje = mensajes[campo.name][error];
    }
  });

  const mensajeError = campo.parentNode.querySelector(".mensaje-error");
  const validarInputCheck = campo.checkValidity();

  if (!validarInputCheck) {
    mensajeError.textContent = mensaje;
  }
  else {
    mensajeError.textContent = "";
  }
}

