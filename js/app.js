alert("El siguiente programa, emula el ingreso de activos (computadores o dispositivos tecnologicos al sistema de información un ejemplo es Marca: Asus, Serial: F8E2FE3F, Linea: Tuf Gaming F15, Tipo de equipo: Portatil");

let cantidad = parseInt(prompt("Cuantos equipos desea ingresar al sistema? "));

if(!isNaN(cantidad) && cantidad != null && cantidad != "" && cantidad >= 0){
    
    let n = 1;

    for(n; n <= cantidad; n++){
        solicitarDatos(n);
    }

}else{
    alert('El dato ingresado es igual a 0, menor de 0 o no es un numero, inicia el programa nuevamente');
}

function solicitarDatos (id){
        alert("Ingrese los datos del " + id + " equipo:")
        let identificador = id;
        let marca = prompt("Ingrese la marca del Equipo");
        let serial = prompt("Ingrese la serial del Equipo");
        let linea = prompt("Ingrese la linea del Equipo");
        let tipoEquipo = prompt("Ingrese la tipo de equipo del Equipo");
        imprimirDatos(identificador, marca, serial, linea, tipoEquipo)
    }

function imprimirDatos(id, marca, serial, linea, tipoEquipo) {
    alert("los datos del " + id + " equipo ingresado en el sistema son -> Marca: " + marca + ", Serial: " + serial + ", Linea: " + linea + ", Tipo de Equipo: " + tipoEquipo)
}