// const listaElementos = [];
// let ancho = prompt("Ingresa el ancho :v ");

// do{
//     let entrada = prompt("Ingresa un elemento");
//     listaElementos.push(entrada);

// } while (listaElementos.length != ancho);

// const nuevaLista = listaElementos.concat(['clavos', 'laminas']);

// const eliminar = (nombre) => {
//     let index = nuevaLista.indexOf(nombre);
//     console.log('entre',index)
//     if (index != -1) {
//         console.log("El elemento "+nombre+" en el indice "+index+" fue eliminado");
//         nuevaLista.splice(index, 1);
//     }
// }

// console.log('longitud de la lista: '+ nuevaLista.length);
// console.log(nuevaLista.join("\n"));
// let datoAEliminar = prompt("Ingresa elemento a borrar");
// eliminar(datoAEliminar);
// console.log(nuevaLista.join("\n"));

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.preProdcio = parseFloat(precio);
        this.vendido = false;
    }
    deducirIVA() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];

productos.push(new Producto("Arroz", 120));
productos.push(new Producto("Papel", 130));
productos.push(new Producto("Sopa", 120));

for (const producto of productos) {
    console.log("----------------------");
    console.log(producto.nombre);
    console.log(producto.precio);
}