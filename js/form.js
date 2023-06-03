const inputObligatorio = document.querySelectorAll(".inputObligatorio");

inputObligatorio.forEach((element) => {
  element.addEventListener("input", (e) => {
    if (e.target.value === "") {
      Toastify({
        text: "¡Esta campo no puede estar vacío!",
        className: "info",
        position: "center bottom",
        style: {
          background: "linear-gradient(to right, red, red)",
        },
      }).showToast();
    }
  });
});

const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#validationName");
const telefono = document.querySelector("#validationPhone");
const mensaje = document.querySelector("validationMsg");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDeFault();
  if (nombre.value == "" || telefono.value == "" || mensaje.value == "") {
    Toastify({
      text: "Completar campos obligatorios",
      className: "info",
      position: "center bottom",
      style: {
        background: "linear-gradient(to right, red, red)",
      },
    }).showToast();
  } else {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Mensaje enviado ¡Te contactaremos a la brevedad!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
