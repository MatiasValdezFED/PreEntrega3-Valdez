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
        <div class="card" style="width: 18rem;">
  <img src="${articulo.imagen}" class="card-img-top" alt="${articulo.nombreProducto}">
  <div class="card-body">
    <h5 class="card-title">${articulo.nombreProducto}</h5>
    <p class="card-text">${articulo.descripcion}</p>
    <div>$${articulo.precio}</div>
    <button class="btn btn-primary carrito__2 botonAgregar" id=${articulo.id}>Agregar al Carrito</button>
  </div>
</div>
    `;
      productosGrid.append(article);
    });
    agregarArticulos();
  });
}

crearProductos();

// Buscador de Artículos

const buscarArticulos = document.querySelector(".inputSearch");

function filtrar() {
  productosGrid.innerHTML = "";

  const texto = buscarArticulos.value.toLowerCase();
  let articuloEncontrado = false;

  for (let arti of articulos) {
    let nombre = arti.nombreProducto.toLowerCase();
    if (nombre.includes(texto)) {
      const article = document.createElement("article");
      article.classList.add("producto");
      article.innerHTML = `
    <h2>${arti.nombreProducto}</h2>
        <img src="${arti.imagen}" alt="${arti.nombreProducto}">
        <div>$${arti.precio}</div>
        <button class="carrito__2 botonAgregar" id=${arti.id}>AGREGAR AL CARRITO</button>
    `;
      productosGrid.append(article);
      articuloEncontrado = true;
    }
  }
  agregarArticulos();
  if (!articuloEncontrado) {
    productosGrid.style.padding = "5rem";
    productosGrid.innerHTML = "<p>Artículo no encontrado :(</p>";
  }
}

buscarArticulos.addEventListener("keyup", filtrar);

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
