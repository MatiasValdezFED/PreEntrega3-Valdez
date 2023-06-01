// Listado de Productos

// const articulos = [
//   {
//     id: 1,
//     nombreProducto: "Hilo Encerado",
//     precio: 380,
//     categoria: "Hilos",
//     imagen: "../assets/Productos/Hilo Encerado.jpg",
//     descripcion: "Hilo reforzado con cera",
//   },
//   {
//     id: 2,
//     nombreProducto: "Totora",
//     precio: 800,
//     categoria: "Tejido",
//     imagen: "../assets/Productos/Totoras.jpg",
//     descripcion: "Totora x kg",
//   },
//   {
//     id: 3,
//     nombreProducto: "Cierre Reforzado",
//     precio: 320,
//     categoria: "Cierres",
//     imagen: "../assets/Productos/Cierres reforzados.jpg",
//     descripcion: "Cierre antidesgaste resitente",
//   },
//   {
//     id: 4,
//     nombreProducto: "Elástico para boxer",
//     precio: 200,
//     categoria: "Elásticos",
//     imagen: "../assets/Productos/Elástico para boxer.jpg",
//     descripcion: "Elástico resistente para boxer",
//   },
//   {
//     id: 5,
//     nombreProducto: "Avío para lencería",
//     precio: 20,
//     categoria: "Lencería",
//     imagen: "../assets/Productos/Avíos.jpg",
//     descripcion: "Avíos metálicos para lencería (6,8 y 10 mm)",
//   },
//   {
//     id: 6,
//     nombreProducto: "Rueda de alfileres largos",
//     precio: 300,
//     categoria: "Alfileres",
//     imagen: "../assets/Productos/Rueda de alfileres largos.jpg",
//     descripcion: "Rueda de alfileres largos (x48u)",
//   },
//   {
//     id: 7,
//     nombreProducto: "Anilina",
//     precio: 250,
//     categoria: "Anilina",
//     imagen: "../assets/Productos/Anilina.jpg",
//     descripcion: "Anilina para teñir",
//   },
//   {
//     id: 8,
//     nombreProducto: "Botones",
//     precio: 150,
//     categoria: "Botones",
//     imagen: "../assets/Productos/Botones.jpg",
//     descripcion: "Botones",
//   },
//   {
//     id: 9,
//     nombreProducto: "Cierre reforzado por metro",
//     precio: 380,
//     categoria: "Cierres",
//     imagen: "../assets/Productos/Cierre reforzado x metro.jpg",
//     descripcion: "Cierre reforzado x metro",
//   },
//   {
//     id: 10,
//     nombreProducto: "Cintas",
//     precio: 200,
//     categoria: "Cintas",
//     imagen: "../assets/Productos/Cintas.jpg",
//     descripcion: "Cintas",
//   },
//   {
//     id: 11,
//     nombreProducto: "Cuentas de madera",
//     precio: 150,
//     categoria: "Artesanías",
//     imagen: "../assets/Productos/Cuentas de madera.jpg",
//     descripcion: "Cuentas de madera",
//   },
//   {
//     id: 12,
//     nombreProducto: "Lana semigorda 4-7",
//     precio: 500,
//     categoria: "Lanas",
//     imagen: "../assets/Productos/Lana semigorda 4-7.jpg",
//     descripcion: "Lana semigorda 4-7",
//   },
// ];

const productosGrid = document.querySelector(".productos__grid");
const botonAgregar = document.querySelectorAll(".botonAgregar");
const contadorCarrito = document.getElementById("cantidadCarrito");

let articulos;

function crearProductos() {
  productosGrid.innerHTML = "";

  fetch("../json/articulos.json")
    .then((r) => r.json())
    .then((d) => {
      articulos = d;
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
