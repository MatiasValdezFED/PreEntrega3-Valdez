//Crear los artículos
const productosGrid = document.querySelector(".productos__grid");
const botonAgregar = document.querySelectorAll(".botonAgregar");
const contadorCarrito = document.getElementById("cantidadCarrito");

let articulos;

const obtenerArticulos = async () => {
  const response = await fetch("../json/articulos.json");
  const data = await response.json();

  return data;
};

function crearProductos() {
  productosGrid.innerHTML = "";

  obtenerArticulos().then((response) => {
    articulos = response;
    articulos.forEach((articulo) => {
      const article = document.createElement("article");
      article.classList.add("producto");
      article.innerHTML = `
    <h2>${articulo.nombreProducto}</h2>
        <img src="${articulo.imagen}" alt="${articulo.nombreProducto}">
        <div>$${articulo.precio}</div>
        <button class="carrito__2 botonAgregar" id=${articulo.id}>AGREGAR AL CARRITO</button>
    `;
      productosGrid.append(article);
    });
    agregarArticulos();
  });
}

crearProductos();

// Buscador de Artículos

// const buscarArticulos = document.querySelector(".inputSearch");

// function filtrar() {
//   productosGrid.innerHTML = "";

//   const texto = buscarArticulos.value.toLowerCase();
//   for (let articulo of articulos) {
//     let nombre = articulo.nombreProducto.toLowerCase();
//     if (nombre.indexOf(texto) !== -1) {
//       crearProductos();
//     } else {
//       innerHTML = `
//       <section class="productos__grid" id="productos__grid">
//        <h2>Producto no encontrado...</h2>
//       </section>
//                   `;
//     }
//   }
// }

// buscarArticulos.addEventListener("keyup", filtrar);

//Agregar artículos al carrito

function agregarArticulos() {
  const botonAgregar = document.querySelectorAll(".botonAgregar");

  botonAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
  addAlert();
}

agregarArticulos();

let carrito;

function agregarAlCarrito(e) {
  carrito = obtenerLocalStorage();

  const botonId = parseInt(e.currentTarget.id);
  const articuloAgregado = articulos.find(
    (articulo) => articulo.id === botonId
  );
  if (carrito && carrito.some((articulo) => articulo.id === botonId)) {
    const index = carrito.findIndex((articulo) => articulo.id === botonId);
    carrito[index].cantidad++;
  } else {
    articuloAgregado.cantidad = 1;
    carrito.push(articuloAgregado);
  }
  console.log(carrito);

  localStorage.setItem("articulos-en-carrito", JSON.stringify(carrito));
  actualizarContador(carrito);
}

function actualizarContador(carrito) {
  let contador = carrito.reduce((acc, articulo) => acc + articulo.cantidad, 0);
  contadorCarrito.innerText = contador;
}

function addAlert() {
  const agregarBtn = document.querySelectorAll(".carrito__2");

  agregarBtn.forEach((boton) => {
    boton.addEventListener("click", function () {
      Toastify({
        text: "Artículo Añadido",
        className: "info",
        position: "left top",
        style: {
          background: "linear-gradient(to right, #72002eff, #70566dff)",
        },
      }).showToast();
    });
  });
}

addAlert();
