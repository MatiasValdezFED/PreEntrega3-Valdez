//Carrito de productos

// Crear los productos
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
const carrito = [];

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
      alert(`Su pedido es de ${cierreReforzado.precio}`);
      break;
    case avio.id:
      montoTotal += avio.precio;
      alert(`Su pedido es de ${avio.precio}`);
      break;
    case elastico.id:
      montoTotal += elastico.precio;
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

function iniciar() {
  alert(
    "¡Le damos la bienvenida a Entre Hilos! por favor siga las instrucciones para realizar su compra. Click en 'Aceptar' para continuar"
  );
  ingresarNombre();
  seleccionarProductos();
  mostrarCarrito();
  alert(
    "¡Gracias por su compra! lo contactaremos a la brevedad para completar su pago"
  );
}

iniciar();
