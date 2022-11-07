//clase Activo
class Activo {
    constructor(id, marca, linea, serial, placa, modelo, tipoEquipo, unidadOptica, camara, contrato, estado){
        this.id = id;
        this.marca = marca;
        this.linea = linea;
        this.serial = serial;
        this.placa = placa;
        this.modelo = modelo;
        this.tipoEquipo = tipoEquipo;
        this.unidadOptica = unidadOptica;
        this.camara = camara;
        this.contrato = contrato;
        this.estado = estado;
    }

    imprimirDatos(marca){
        alert('Los datos ingresados son ${marca}' )
    }
};


//array para guardar datos del objeto instanciado
const nuevoActivo = [];


function datosActivo (){
    //instanciando Activo
    const instanciaActivo = new Activo;

    //solicitud de datos
    const marca = instanciaActivo.marca = prompt("Digite la marca del equipo");
    const linea = instanciaActivo.linea = prompt("Digite la linea del equipo");
    /* const serial = instanciaActivo.serial =  prompt("Digite el serial del equipo");
    const placa = instanciaActivo.placa =  prompt("Digite el placa del equipo");
    const modelo = instanciaActivo.modelo = prompt("Digite el modelo del equipo");
    const tipoEquipo = instanciaActivo.modelo = prompt("Digite el tipo de equipo");
    const unidadOptica = instanciaActivo.unidadOptica = prompt("Digite si el equipo tiene unidad optica - SI/NO").toUpperCase();
    const camara = instanciaActivo.camara = prompt("Digite si el equipo tiene camara - SI/NO").toUpperCase();
    const contrato = instanciaActivo.contrato = prompt("Digite el numero del contrato por donde fue adquirido el equipo");
    const estado = instanciaActivo.estado = prompt("Digite si el equipo esta activo o inactivo").toUpperCase(); */

    nuevoActivo.push(marca, linea/* , serial, placa, modelo, tipoEquipo, unidadOptica, camara, contrato, estado */);
}

datosActivo()





//agregar un objeto al array
let agregarActivo = nuevoActivo.push('Toshiba', 'Satellite'/* , '98FD5', '2489', '2021', 'Portatil', 'NO', 'SI', 'CCV-056-2021', 'ACTIVO' */);




//recorrido del array
nuevoActivo.forEach(array);

function array(item, index) {
    console.log(`El index ${index} contiene ${item}`)
}



//llamada a un objeto del array
/* console.log(nuevoActivo[1]); */

//******************************* array de objetos Activos ************************* */
const activos = [
    {
        id: 1,
        marca: "Asus",
        linea: "Tuf Gaming F15",
        serial: "F8F2DSAE66F",
        placa: "8956",
        modelo: "2019",
        tipoEquipo: "Laptop - Portatil",
        unidadOptica: "SI",
        camara: "SI",
        contrato: "CCV-030-2021",
        estado: "Activo"
    },
    {
        id: 2,
        marca: "Acer",
        linea: "Nitro",
        serial: "RE5F2E",
        placa: "2054",
        modelo: "2021",
        tipoEquipo: "Laptop - Portatil",
        unidadOptica: "NO",
        camara: "SI",
        contrato: "CCV-055-2021",
        estado: "Activo"
    },
    {
        id: 3,
        marca: "Lenovo",
        linea: "IdeaPad Gaming 3",
        serial: "DF5E2D3",
        placa: "1247",
        modelo: "2019",
        tipoEquipo: "Laptop - Portatil",
        unidadOptica: "SI",
        camara: "SI",
        contrato: "CCV-056-2019",
        estado: "Activo"
    },
    {
        id: 4,
        marca: "Hewlett Packard",
        linea: "Pro desk 6300",
        serial: "FDSA8FE2",
        placa: "6633",
        modelo: "2021",
        tipoEquipo: "Escritorio",
        unidadOptica: "SI",
        camara: "NO",
        contrato: "CCV-054-2021",
        estado: "Activo"
    },
    {
        id: 5,
        marca: "Asus",
        linea: "Zen Book 15",
        serial: "F5E12FD",
        placa: "9678",
        modelo: "2022",
        tipoEquipo: "Laptop - Portatil",
        unidadOptica: "SI",
        camara: "SI",
        contrato: "CCV-089-2022",
        estado: "Activo"
    },
    {
        id: 6,
        marca: "Asus Rog",
        linea: "Gaming",
        serial: "FWEFDS5215E",
        placa: "4856",
        modelo: "2022",
        tipoEquipo: "Escritorio",
        unidadOptica: "SI",
        camara: "NO",
        contrato: "CCV-100-2022",
        estado: "Activo"
    },
];

/* Aplicando metodos estos los incluiria dentro del objeto para llevarlos al DOM */

/* Usando Filtros */
let encontrarActivo = activos.find((activo) => activo.marca === "Asus");
console.log(encontrarActivo);


/* usando filter, include */
const filtrarActivos = activos.filter((activo) => activo.marca.includes('Asus'));
console.log(filtrarActivos);


/* usando Some */
const algunActivo = activos.some((activo) => activo.nombre === "8620");
console.log(algunActivo);

/* usando map */
const placaActivo = activos.map((activo) => activo.placa);
console.log(placaActivo);

/* Usando Sort */
const ordenarActivos = activos.sort((a, b) => a - b);
console.log(ordenarActivos);

/* nuevo array */
const nuevoArray = nuevoActivo.slice(0, 1);
console.log(nuevoArray);




/* ************************ Añadiendo datos del array de objetos a la tabla ************************************/

const llenarTabla = () => {

    const tablaActivos = document.querySelector('#tabla');

    activos.forEach((activo) => {
        const tr = document.createElement('tr')
        tr.innerHTML =  `
            <tr>
                <td>${activo.id}</td>
                <td>${activo.marca}</td>
                <td>${activo.linea}</td>
                <td>${activo.serial}</td>
                <td>${activo.placa}</td>
                <td>${activo.modelo}</td>
                <td>${activo.tipoEquipo}</td>
                <td>${activo.unidadOptica}</td>
                <td>${activo.camara}</td>
                <td>${activo.contrato}</td>
                <td>${activo.estado}</td>
            </tr>
        `
        const btns = document.createElement('td')
        btns.innerHTML = `
            <td>
                <button type="button" class="btn btn-danger">Eliminar</button>
                <button type="button" class="btn btn-secondary">Editar</button>
            </td>
        `

        btns.addEventListener('click', () => {
            faltacodigo
        })

        tr.append(btns);
        tablaActivos.append(tr);
    })
}

llenarTabla();


//clase Activo
class Activo {
    constructor(id, marca, linea, serial, placa, modelo, tipoEquipo, unidadOptica, camara, contrato, estado){
        this.id = id;
        this.marca = marca;
        this.linea = linea;
        this.serial = serial;
        this.placa = placa;
        this.modelo = modelo;
        this.tipoEquipo = tipoEquipo;
        this.unidadOptica = unidadOptica;
        this.camara = camara;
        this.contrato = contrato;
        this.estado = estado;
    }

    imprimirDatos(marca){
        alert('Los datos ingresados son ${marca}' )
    }
};


//array para guardar datos del objeto instanciado
const nuevoActivo = [];


function datosActivo (){
    //instanciando Activo
    const instanciaActivo = new Activo;

    //solicitud de datos
    const marca = instanciaActivo.marca = prompt("Digite la marca del equipo");
    const linea = instanciaActivo.linea = prompt("Digite la linea del equipo");
    /* const serial = instanciaActivo.serial =  prompt("Digite el serial del equipo");
    const placa = instanciaActivo.placa =  prompt("Digite el placa del equipo");
    const modelo = instanciaActivo.modelo = prompt("Digite el modelo del equipo");
    const tipoEquipo = instanciaActivo.modelo = prompt("Digite el tipo de equipo");
    const unidadOptica = instanciaActivo.unidadOptica = prompt("Digite si el equipo tiene unidad optica - SI/NO").toUpperCase();
    const camara = instanciaActivo.camara = prompt("Digite si el equipo tiene camara - SI/NO").toUpperCase();
    const contrato = instanciaActivo.contrato = prompt("Digite el numero del contrato por donde fue adquirido el equipo");
    const estado = instanciaActivo.estado = prompt("Digite si el equipo esta activo o inactivo").toUpperCase(); */

    nuevoActivo.push(marca, linea/* , serial, placa, modelo, tipoEquipo, unidadOptica, camara, contrato, estado */);
}

datosActivo()





//agregar un objeto al array
let agregarActivo = nuevoActivo.push('Toshiba', 'Satellite'/* , '98FD5', '2489', '2021', 'Portatil', 'NO', 'SI', 'CCV-056-2021', 'ACTIVO' */);




//recorrido del array
nuevoActivo.forEach(array);

function array(item, index) {
    console.log(`El index ${index} contiene ${item}`)
}



//llamada a un objeto del array
/* console.log(nuevoActivo[1]); */

//******************************* array de objetos Activos ************************* */
const activos = [
    {
        id: 1,
        marca: "Asus",
        linea: "Tuf Gaming F15",
        serial: "F8F2DSAE66F",
        placa: "8956",
        modelo: "2019",
        tipoEquipo: "Laptop - Portatil",
        unidadOptica: "SI",
        camara: "SI",
        contrato: "CCV-030-2021",
        estado: "Activo"
    },
    {
        id: 2,
        marca: "Acer",
        linea: "Nitro",
        serial: "RE5F2E",
        placa: "2054",
        modelo: "2021",
        tipoEquipo: "Laptop - Portatil",
        unidadOptica: "NO",
        camara: "SI",
        contrato: "CCV-055-2021",
        estado: "Activo"
    },
    {
        id: 3,
        marca: "Lenovo",
        linea: "IdeaPad Gaming 3",
        serial: "DF5E2D3",
        placa: "1247",
        modelo: "2019",
        tipoEquipo: "Laptop - Portatil",
        unidadOptica: "SI",
        camara: "SI",
        contrato: "CCV-056-2019",
        estado: "Activo"
    },
    {
        id: 4,
        marca: "Hewlett Packard",
        linea: "Pro desk 6300",
        serial: "FDSA8FE2",
        placa: "6633",
        modelo: "2021",
        tipoEquipo: "Escritorio",
        unidadOptica: "SI",
        camara: "NO",
        contrato: "CCV-054-2021",
        estado: "Activo"
    },
    {
        id: 5,
        marca: "Asus",
        linea: "Zen Book 15",
        serial: "F5E12FD",
        placa: "9678",
        modelo: "2022",
        tipoEquipo: "Laptop - Portatil",
        unidadOptica: "SI",
        camara: "SI",
        contrato: "CCV-089-2022",
        estado: "Activo"
    },
    {
        id: 6,
        marca: "Asus Rog",
        linea: "Gaming",
        serial: "FWEFDS5215E",
        placa: "4856",
        modelo: "2022",
        tipoEquipo: "Escritorio",
        unidadOptica: "SI",
        camara: "NO",
        contrato: "CCV-100-2022",
        estado: "Activo"
    },
];

/* Aplicando metodos estos los incluiria dentro del objeto para llevarlos al DOM */

/* Usando Filtros */
let encontrarActivo = activos.find((activo) => activo.marca === "Asus");
console.log(encontrarActivo);


/* usando filter, include */
const filtrarActivos = activos.filter((activo) => activo.marca.includes('Asus'));
console.log(filtrarActivos);


/* usando Some */
const algunActivo = activos.some((activo) => activo.nombre === "8620");
console.log(algunActivo);

/* usando map */
const placaActivo = activos.map((activo) => activo.placa);
console.log(placaActivo);

/* Usando Sort */
const ordenarActivos = activos.sort((a, b) => a - b);
console.log(ordenarActivos);

/* nuevo array */
const nuevoArray = nuevoActivo.slice(0, 1);
console.log(nuevoArray);




/* ************************ Añadiendo datos del array de objetos a la tabla ************************************/

const llenarTabla = () => {

    const tablaActivos = document.querySelector('#tabla');

    activos.forEach((activo) => {
        const tr = document.createElement('tr')
        tr.innerHTML =  `
            <tr>
                <td>${activo.id}</td>
                <td>${activo.marca}</td>
                <td>${activo.linea}</td>
                <td>${activo.serial}</td>
                <td>${activo.placa}</td>
                <td>${activo.modelo}</td>
                <td>${activo.tipoEquipo}</td>
                <td>${activo.unidadOptica}</td>
                <td>${activo.camara}</td>
                <td>${activo.contrato}</td>
                <td>${activo.estado}</td>
            </tr>
        `
        const btns = document.createElement('td')
        btns.innerHTML = `
            <td>
                <button type="button" class="btn btn-danger">Eliminar</button>
                <button type="button" class="btn btn-secondary">Editar</button>
            </td>
        `

        btns.addEventListener('click', () => {
            faltacodigo
        })

        tr.append(btns);
        tablaActivos.append(tr);
    })
}

llenarTabla();