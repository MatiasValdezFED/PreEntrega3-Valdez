//Articulos en carrito

const carritoVacio = document.querySelector(".carrito__vacio");
const articulosCarrito = document.querySelector(".articulos__carrito");
const carritoAcciones = document.querySelector(".carrito__acciones");
//const articulosCarrito = document.querySelector(".articulos__carrito")

const carritoArticulo = JSON.parse(
  localStorage.getItem("articulos-en-carrito")
);

console.log(carritoArticulo);

if (carritoArticulo) {
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
    <button class="articulo__carrito__borrar">
     <i class="fa-solid fa-trash" id="${articulo.id}"></i>
    </button>`;

    articulosCarrito.append(div);
  });
}
