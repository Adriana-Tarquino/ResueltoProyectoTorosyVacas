import TorosYVacas from "./torosyvacas";
const secreto = document.querySelector("#codigo");
const intento = document.querySelector("#intento");
const form = document.querySelector("#juego-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
   event.preventDefault();

   const codigoImput = secreto.value;
   const toroVacas = new TorosYVacas(codigoImput);
   const intentoImput = intento.value;
   div.innerHTML = "<p>" + "respuesta: " +  toroVacas.adivinar(intentoImput) + "</p>" 
});
