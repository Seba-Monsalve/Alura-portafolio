export const tiposError = [
  "valueMissing",
  "typeMismatch",
  "tooShort",
  "tooLong",
  "customError",
];
export const mensajes = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío.",
    patternMismatch: "Por favor, ingrese un nombre válido.",
    tooShort: "Este campo debe contener mas de 3 caracteres",
    tooLong: "Este campo debe contener menos de 50 caracteres",
  },
  email: {
    valueMissing: "El campo email no puede estar vacío.",
    typeMismatch: "Por favor, ingrese un email válido.", 
  },
  asunto: {
    valueMissing: "El campo asunto no puede estar vacío.",
    tooShort: "Este campo debe contener mas de 3 caracteres",
    tooLong: "Este campo debe contener menos de 50 caracteres",
  },
  mensaje: {
    valueMissing: "El campo mensaje no puede estar vacío.",
    tooShort: "Este campo debe contener mas de 10 caracteres",
    tooLong: "Este campo debe contener menos de 300 caracteres",
  },
};
