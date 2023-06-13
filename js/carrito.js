//------------Articulos en carrito-------------

const carritoVacio = document.querySelector(".carrito__vacio");
const articulosCarrito = document.querySelector(".articulos__carrito");
const carritoAcciones = document.querySelector(".carrito__acciones");
const botonEliminar = document.querySelectorAll(".articulo__carrito__borrar");
const botonVaciar = document.querySelector(".carrito__acciones__vaciar");
const total = document.querySelector("#total");
const botonFinalizar = document.querySelector(".carrito__acciones__comprar");

//Carrito

let carritoArticulo;

function obtenerLocalStorage() {
  carritoStorage = localStorage.getItem("articulos-en-carrito");
  if (!carritoStorage) {
    localStorage.setItem("articulos-en-carrito", []);
    return [];
  } else {
    return JSON.parse(carritoStorage);
  }
}

//Añadir al carrito

function cargarArticulosCarrito() {
  carritoArticulo = obtenerLocalStorage();
  console.log("carritoArticulo", carritoArticulo);

  if (carritoArticulo && carritoArticulo.length > 0) {
    carritoVacio.classList.add("disabled");
    articulosCarrito.classList.remove("disabled");
    carritoAcciones.classList.remove("disabled");

    articulosCarrito.innerHTML = "";

    carritoArticulo.forEach((articulo) => {
      const div = document.createElement("div");
      div.classList.add("articulo__carrito");
      div.innerHTML = `<img class="articulo__carrito__imagen" src="${
        articulo.imagen
      }" alt="${articulo.nombreProducto}">
    <div class="articulo__carrito__titulo">
     <h3>${articulo.nombreProducto}</h3>
    </div>
    <div class="articulo__carrito__cantidad">
     <h3>${articulo.cantidad}</h3>
    </div>
    <div class="articulo__carrito__precioUnitario">
     <small>Precio Unitario</small>
     <h3>${articulo.precio}</h3>
    </div>
    <div class="articulo__carrito__Subtotal">
     <small>Subtotal</small>
     <h3>${articulo.precio * articulo.cantidad}</h3>
    </div>
    <button class="articulo__carrito__borrar" id="${articulo.id}">
     <i class="fa-solid fa-trash" id="btnBorrar"></i>
    </button>`;

      articulosCarrito.append(div);
    });

    const botonEliminar = document.querySelectorAll(
      ".articulo__carrito__borrar"
    );

    botonEliminar.forEach((boton) => {
      boton.addEventListener("click", eliminarDelCarrito);
    });
  } else {
    carritoVacio.classList.remove("disabled");
    articulosCarrito.classList.add("disabled");
    carritoAcciones.classList.add("disabled");
  }

  actualizarTotal();
  actualizarContador(carritoArticulo);
}

cargarArticulosCarrito();

//-----Manipulación del carrito--------

const botonCarritoLogo = document.querySelector("#carrito__logo");
const modalCarrito = document.querySelector("#modal-container");
const botonCerrarCarrito = document.querySelector(".close__button");
const pageCover = document.querySelector(".pageCover");

//Abrir y cerrar carrito

function abrirCarrito() {
  pageCover.style.display = "block";
  modalCarrito.classList.remove("disabled");
  cargarArticulosCarrito();
}

botonCarritoLogo.addEventListener("click", abrirCarrito);

function cerrarCarrito() {
  pageCover.style.display = "none";
  modalCarrito.classList.add("disabled");
}

botonCerrarCarrito.addEventListener("click", cerrarCarrito);
pageCover.addEventListener("click", cerrarCarrito);

// Eliminar del carrito

function eliminarDelCarrito(e) {
  carritoArticulo = obtenerLocalStorage();
  let botonId = parseInt(e.currentTarget.id);
  const index = carritoArticulo.findIndex(
    (articulo) => articulo.id === botonId
  );
  carritoArticulo.splice(index, 1);

  localStorage.setItem("articulos-en-carrito", JSON.stringify(carritoArticulo));
  actualizarContador(carritoArticulo);
  cargarArticulosCarrito();

  Toastify({
    text: "Artículo Borrado",
    className: "info",
    position: "left top",
    style: {
      background: "linear-gradient(to right, black, black)",
    },
  }).showToast();
}

//Vaciar Carrito

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
  carritoArticulo = [];
  localStorage.setItem("articulos-en-carrito", JSON.stringify(carritoArticulo));
  actualizarContador(carritoArticulo);
  cargarArticulosCarrito();
}

botonVaciar.addEventListener("click", function () {
  Toastify({
    text: "Carrito Vaciado",
    className: "info",
    style: {
      background: "linear-gradient(to right, red, red)",
    },
  }).showToast();
});

//Total

function actualizarTotal() {
  carritoArticulo = obtenerLocalStorage();
  totalCalculado = carritoArticulo.reduce(
    (acc, articulo) => acc + articulo.precio * articulo.cantidad,
    0
  );
  total.innerText = `${totalCalculado}`;
}

// Finalizar Carrito

// botonFinalizar.addEventListener("click", finalizarCarrito);

botonFinalizar.addEventListener("click", function () {
  const { value: formValues } = Swal.fire({
    title: `El total es $${totalCalculado}, para completar tu compra dejanos un número de teléfono y tu nombre ¡te contactaremos a la brevedad!`,
    html:
      '<input type="number" id="swal-input1" class="swal2-input" placeholder="Teléfono">' +
      '<input type="text" id="swal-input2" class="swal2-input" placeholder="Nombre">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Carrito enviado ¡gracias por tu compra!",
          showConfirmButton: false,
          timer: 1500,
        }),
      ];
    },
  });
  const botonOk = document.querySelector(".swal2-confirm");
  botonOk.addEventListener("click", finalizarCarrito);

  function finalizarCarrito() {
    carritoArticulo = [];
    localStorage.setItem(
      "articulos-en-carrito",
      JSON.stringify(carritoArticulo)
    );
    cargarArticulosCarrito();
    actualizarContador(carritoArticulo);
  }
  formValues && Swal.fire(JSON.stringify(formValues));

  cerrarCarrito();
});
