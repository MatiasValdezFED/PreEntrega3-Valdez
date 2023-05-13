//Condicionales

// if (condicion){
// //respuesta
// }else
// {
// //Otra respeusta
// };

//Operadores Lógicos

// == igualdad
// > mayor que
// < menor que
// != distinto
// >= mayor o igual
// <= menor o igual
// === estrictamente igual
// !== estructamente diferente
// && AND
// || OR

const puntaje = 1000;

if (puntaje > 500) {
  console.log("Ganaste");
} else {
  console.log("Perdiste");
}

const efectivo = 300;
const credito = 400;
const totalPagar = 600;
const disponible = efectivo + credito;

console.log(disponible);

//Si alguno de los OR se cumple, arroja el primer ELSE
if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
  console.log("Podemos comprar");
} else {
  console.log("Saldos insuficientes");
}

const texto = prompt("Ingrese la palabra 'Coderhouse'");

if (texto === "Coderhouse") {
  console.log("La respuesta es correcta");
} else {
  console.log("La respuesta es incorrecta");
}

const precio = prompt("Ingrese el precio del producto");

if (precio > 100) {
  alert("Es caro");
} else {
  alert("Es barato");
}

// Back Up Entrega 2

function crearProducto(id, nombreProducto, precio, descripcion) {
  (this.id = id),
    (this.nombreProducto = nombreProducto),
    (this.precio = precio),
    (this.descripción = descripcion);
}

const hiloEncerado = new crearProducto(
  1,
  "Hilo Encerado",
  380,
  "Hilo reforzado con cera"
);
const totora = new crearProducto(
  2,
  "Totora",
  650,
  "Totora x ovillo de 300 grs aproximadamente"
);
const cierreReforzado = new crearProducto(
  3,
  "Cierre Reforzado",
  350,
  "Cierre antidesgaste resitente"
);
const avio = new crearProducto(4, "Avío", 50, "Hilo reforzado con cera");
const elastico = new crearProducto(
  5,
  "Elástico",
  300,
  "Elástico resistente para boxer"
);

// Creación del carrito vacío con un array
let carrito = [];

// Inicializar el monto total
let montoTotal = 0;

// Ingresar el nombre
function ingresarNombre() {
  const NOMBRE = prompt("Por favor ingrese su nombre");
  if (NOMBRE == null || NOMBRE.trim() == "") {
    alert("Por favor inserte un nombre válido para continuar");
    return ingresarNombre();
  } else {
    alert(
      `¡Hola ${NOMBRE}! ahora le vamos a mostrar nuestro catalogo, por favor haga click en 'Aceptar' para continuar`
    );
  }
}

//Sumar productos al carrito
function seleccionarProductos() {
  let producto = parseInt(
    prompt(
      `Por favor seleccione el número de la opción que desee: \n1: ${hiloEncerado.nombreProducto} (${hiloEncerado.precio}) \n2: ${totora.nombreProducto} (${totora.precio})  \n3: ${cierreReforzado.nombreProducto} (${cierreReforzado.precio}) \n4: ${avio.nombreProducto} (${avio.precio}) \n5: ${elastico.nombreProducto} (${elastico.precio})`
    )
  );
  switch (producto) {
    case hiloEncerado.id:
      montoTotal += hiloEncerado.precio;
      carrito.push(hiloEncerado);
      alert(`Su pedido es de ${hiloEncerado.precio}`);
      break;
    case totora.id:
      montoTotal += totora.precio;
      carrito.push(totora);
      alert(`Su pedido es de ${totora.precio}`);
      break;
    case cierreReforzado.id:
      montoTotal += cierreReforzado.precio;
      carrito.push(cierreReforzado);
      alert(`Su pedido es de ${cierreReforzado.precio}`);
      break;
    case avio.id:
      montoTotal += avio.precio;
      carrito.push(avio);
      alert(`Su pedido es de ${avio.precio}`);
      break;
    case elastico.id:
      montoTotal += elastico.precio;
      carrito.push(elastico);
      alert(`Su pedido es de ${elastico.precio}`);
      break;
    default:
      alert("Su opción no es correcta, por favor seleccione nuevamente");
      return seleccionarProductos();
  }
  alert(`Su monto total es de ${montoTotal}`);
  console.log(producto);
  seleccionFinal();
}

function seleccionFinal() {
  const seleccion = prompt(
    "¿Desea seleccionar otro producto?: \n1: Si \n2: No"
  );

  while (seleccion == 1) {
    return seleccionarProductos();
  }
}

function mostrarCarrito() {
  let lista = "Su carrito es:";
  if (carrito.length > 0) {
    for (let index = 0; index < carrito.length; index++) {
      const nombreProducto = carrito[index].nombreProducto;
      lista += ` ${nombreProducto} \n`;
    }
    alert(`${lista} y su monto total es ${montoTotal}`);
  }
}

function eliminarCarrito() {
  carrito = [];
  montoTotal = 0;
}

function editarCarrito() {
  let lista = "Su carrito es: \n";
  if (carrito.length > 0) {
    for (let index = 0; index < carrito.length; index++) {
      const nombreProducto = carrito[index].nombreProducto;
      const id = carrito[index].id;
      lista += `${id} - ${nombreProducto} \n`;
    }
    const eliminarProductos = parseInt(
      prompt(`${lista} y su monto total es ${montoTotal}
    escriba el número del producto que desea eliminar:`)
    );
    switch (eliminarProductos) {
      case hiloEncerado.id:
        montoTotal -= hiloEncerado.precio;
        let index1 = carrito.indexOf(hiloEncerado);
        carrito.splice(index1, 1);
        alert(`se ha eliminado ${hiloEncerado.nombreProducto}`);
        break;
      case totora.id:
        montoTotal -= totora.precio;
        let index2 = carrito.indexOf(totora);
        carrito.splice(index2, 1);
        alert(`se ha eliminado ${totora.nombreProducto}`);
        break;
      case cierreReforzado.id:
        montoTotal -= cierreReforzado.precio;
        let index3 = carrito.indexOf(cierreReforzado);
        carrito.splice(index3, 1);
        alert(`se ha eliminado ${cierreReforzado.nombreProducto}`);
        break;
      case avio.id:
        montoTotal -= avio.precio;
        let index4 = carrito.indexOf(avio);
        carrito.splice(index4, 1);
        alert(`se ha eliminado ${avio.nombreProducto}`);
        break;
      case elastico.id:
        montoTotal -= elastico.precio;
        let index5 = carrito.indexOf(elastico);
        carrito.splice(index5, 1);
        alert(`se ha eliminado ${elastico.nombreProducto}`);
        break;
      default:
        alert("Su opción no es correcta, por favor seleccione nuevamente");
        return editarCarrito();
    }
    mostrarCarrito();
  } else {
    alert("Su carrito está vacío");
  }
}

function finalizarCarrito() {
  const elección = parseInt(
    prompt(
      "Elija cómo continuar: \n1: Finalizar Carrito \n2: Vaciar Carrito \n3: Editar Carrito"
    )
  );
  switch (elección) {
    case 1:
      break;
    case 2:
      eliminarCarrito();
      alert("Su carrito se ha vaciado");
      break;
    case 3:
      editarCarrito();
      break;
    default:
      alert("Su opción no es correcta, por favor seleccione nuevamente");
      return finalizarCarrito();
  }
}

function iniciar() {
  alert(
    "¡Le damos la bienvenida a Entre Hilos! por favor siga las instrucciones para realizar su compra. Click en 'Aceptar' para continuar"
  );
  ingresarNombre();
  seleccionarProductos();
  mostrarCarrito();
  finalizarCarrito();
  if (carrito.length > 0) {
    alert(
      "¡Gracias por su compra! lo contactaremos a la brevedad para completar su pago"
    );
  } else {
    alert("¡Gracias por visitarnos, vuelva pronto!");
  }
}

iniciar();

/* <article class="producto">
        <h2>Totoras</h2>
        <img class="wow animate__animated animate__pulse"
          src="../assets/Productos/Imagen de WhatsApp 2023-01-02 a las 22.41.19jkhjkhj.jpg" alt="Totoras">
        <div class="carrito__2">AGREGAR AL CARRITO</div>
        <div>$650 (kg)</div>
      </article>
      <article class="producto">
        <h2>Cierres Reforzados</h2>
        <img class="wow animate__animated animate__pulse"
          src="../assets/Productos/Imagen de WhatsApp 2023-01-02 a las 22.41.20gfd.jpg" alt="Cierres">
        <div class="carrito__2">AGREGAR AL CARRITO</div>
        <div>$320</div>
      </article>
      <article class="producto">
        <h2>Avíos (6,8 y 10 mm)</h2>
        <img class="wow animate__animated animate__pulse"
          src="../assets/Productos/Imagen de WhatsApp 2023-01-02 a las 22.41.21a.jpg" alt="Avíos">
        <div class="carrito__2">AGREGAR AL CARRITO</div>
        <div>$20</div>
      </article>
      <article class="producto">
        <h2>Elásticos para boxer</h2>
        <img class="wow animate__animated animate__pulse"
          src="../assets/Productos/Imagen de WhatsApp 2023-01-02 a las 22.41.21aa.jpg" alt="Elásticos p/boxer">
        <div class="carrito__2">AGREGAR AL CARRITO</div>
        <div>$200 (m)</div>
      </article>
      <article class="producto">
        <h2>Rueda de alfileres largos</h2>
        <img class="wow animate__animated animate__pulse"
          src="../assets/Productos/Imagen de WhatsApp 2023-01-02 a las 22.41.22.jpg" alt="Ruedas alfileres">
        <div class="carrito__2">AGREGAR AL CARRITO</div>
        <div>$300 (x48u)</div>
      </article> */
