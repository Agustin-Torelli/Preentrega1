alert("Bienvenidos a nuestra TiendaOnline . Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt( "1-Remera $8000 2-Short $10000 3-jeans $12000 4-zapatillas $60000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado es remera, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3000)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es short, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1500)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es jeans, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 5000)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es zapatillas, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 6000)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt("1-Remera $8000 2-Short $10000 3-jeans $12000 4-Zapatillas $60000 "))
}

alert("el total de la compra es de: " + total)

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.1
    alert("tenes un interes de 1000, el total es:" + total)
  }else if ( metodo == "efectivo") {
    total -= 1000
    alert("tenes un descuento de 1000, el total es:" + total)
  }


}

metodoDePago()

const envio = () => {
    if (total >= 10000) {
      alert("El envio es gratuito")
    }else{
      total += 1000
      alert("el costo de envio es de 1000, el total es: " + total)
    }
}
