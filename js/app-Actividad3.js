const abrirModal = document.querySelector('#abrir-modal')
const cerrarModal = document.querySelector('#cerrar-modal')
const modalContainer = document.querySelector('#modal-contenedor')



abrirModal.addEventListener('click', () => {
    modalContainer.classList.add('modal-contenedor-activo')
})

const activos = [
    {
        marca: "Asus",
        linea: "Tuf Gaming F15",
        serial: "F8F2DSAE66F",
        placa: 8956,
        modelo: "2019",
        tipoEquipo: "Laptop - Portatil",
        unidadOptica: "SI",
        camara: "SI",
        contrato: "CCV-030-2021",
        estado: "Activo"
    },
    {
        marca: "Acer",
        linea: "Nitro",
        serial: "RE5F2E",
        placa: 2054,
        modelo: "2021",
        tipoEquipo: "Laptop - Portatil",
        unidadOptica: "NO",
        camara: "SI",
        contrato: "CCV-055-2021",
        estado: "Activo"
    },
    {
        marca: "Lenovo",
        linea: "IdeaPad Gaming 3",
        serial: "DF5E2D3",
        placa: 1247,
        modelo: "2019",
        tipoEquipo: "Laptop - Portatil",
        unidadOptica: "SI",
        camara: "SI",
        contrato: "CCV-056-2019",
        estado: "Activo"
    },
    {
        marca: "Hewlett Packard",
        linea: "Pro desk 6300",
        serial: "FDSA8FE2",
        placa: 6633,
        modelo: "2021",
        tipoEquipo: "Escritorio",
        unidadOptica: "SI",
        camara: "NO",
        contrato: "CCV-054-2021",
        estado: "Activo"
    }
];



// Clase activo
class Activo {
    constructor(marca, linea, serial, placa, modelo, tipoEquipo, unidadOptica, camara, contrato, estado) {
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

    listarActivos() {
        return activos;
    }

    nuevoActivo() {
        activos.push(
            {
                marca: this.marca,
                linea: this.linea,
                serial: this.serial,
                placa: this.placa,
                modelo: this.modelo,
                tipoEquipo: this.tipoEquipo,
                unidadOptica: this.unidadOptica,
                camara: this.camara,
                contrato: this.contrato,
                estado: this.estado
            }
        );
    }

    borrarActivo(index) {
        activos.splice(index, 1);
    }

    busquedaActivoMarca(texto) {
        const busqueda = activos.filter((activo => activo.marca.includes(texto)));
        return busqueda;

    }

    busquedaActivoPlaca(numero) {
        const busquedaPlaca = activos.filter((activo => activo.placa === Number(numero)));
        return busquedaPlaca;
    }

    /* encontrarActivo(index) {
        const busquedaActivo = activos.find((activo) => activo.index === index)
        return busquedaActivo;
    } */




}

const instanciaActivo = new Activo;

//cargar array en tabla
const loadArray = (activos) => {

    let tabla = document.getElementById('tabla');
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }

    let i = 1;

    if (Array.isArray(activos)) {
        activos.forEach((activo, index) => {
            const tr = document.createElement('tr')
            let identificador = i++
            tr.innerHTML = `
            <tr>
                <td>${identificador}</td>
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
                <button id="btnEditar" onclick="editarActivo(${index})" type="button" class="btn btn-secondary btn-sm">Editar</button>
                <button onclick="eliminarActivo(${index})" type="button" class="btn btn-danger btn-sm">Eliminar</button>
            </td>
        `

            tr.append(btns);
            tabla.append(tr);


        });
    } else {
        tabla.innerHTML += `
            <tr>
                <td>${1}</td>
                <td>${activos.marca}</td>
                <td>${activos.linea}</td>
                <td>${activos.serial}</td>
                <td>${activos.placa}</td>
                <td>${activos.modelo}</td>
                <td>${activos.tipoEquipo}</td>
                <td>${activos.unidadOptica}</td>
                <td>${activos.camara}</td>
                <td>${activos.contrato}</td>
                <td>${activos.estado}</td>
            </tr>
            `;
    }
}



const buscar = () => {
    let valorBusqueda = document.getElementById('buscador').value;
    if (valorBusqueda === '') {
        loadArray(instanciaActivo.listarActivos());
    } else if (Number(valorBusqueda)) {
        console.log(valorBusqueda)
        loadArray(instanciaActivo.busquedaActivoPlaca(valorBusqueda));
    } else {
        loadArray(instanciaActivo.busquedaActivoMarca(valorBusqueda));
    }
}

const eliminarActivo = (index) => {

    Swal.fire({
        title: 'Está seguro?',
        text: 'Esta acción no es reversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {

        if (result.isConfirmed) {

            //elimina activo
            instanciaActivo.borrarActivo(index);
            loadArray(instanciaActivo.listarActivos());

            //confirma la eliminacion
            Swal.fire({
                title: 'Eliminado correctamente',
                icon: 'success',
                confirmButtonText: 'Cerrar',
                timer: 1500
            })
        }
    })
}




const agregarActivo = () => {

    let marca = selectMarca();
    let linea = document.getElementById('linea').value;
    let serial = document.getElementById('serial').value;
    let placa = document.getElementById('placa').value;
    let modelo = document.getElementById('modelo').value;
    let tipoEquipo = selectTipoEquipo();
    let contrato = document.getElementById('contrato').value;

    let UnidadO = validaCheckboxUO()
    let camara = validaCheckCamara()
    let estado = validacheckEstado()

    let activo = new Activo(marca, linea, serial, placa, modelo, tipoEquipo, UnidadO, camara, contrato, estado)
    activo.nuevoActivo()
    localStorage.setItem('activo', JSON.stringify(activo));
    loadArray(instanciaActivo.listarActivos());

    limpiarFormulario();

    recuperarArraylocalStorage()
}

// Recuperar datos de localStorage
const recuperarArraylocalStorage = () => {
    let array = localStorage.getItem('activo');
    array = JSON.parse(array)
    console.log(array)
    console.log(array.marca)
}

const limpiarFormulario = () => {
    /* let marca = ; */
    let linea = document.getElementById('linea').value = '';
    let serial = document.getElementById('serial').value = '';
    let placa = document.getElementById('placa').value = '';
    let modelo = document.getElementById('modelo').value = '';
    /* let tipoEquipo = selectTipoEquipo(); */
    let contrato = document.getElementById('contrato').value = '';

    let unidadO = document.getElementById('checkUO').checked = false;
    let camara = document.querySelector('#checkCamara').checked = false;
    let estado = document.querySelector('#checkActivo').checked = false;
}

// Select Marca
function selectMarca() {
    /* Para obtener el valor */
    /* let cod = document.getElementById("marca").value;
    return cod; */

    /* Para obtener el texto */
    let combo = document.getElementById("marca");
    let selected = combo.options[combo.selectedIndex].text;
    return selected
}

// Select tipo Equipo
function selectTipoEquipo() {
    /* Para obtener el valor */
    /* let cod = document.getElementById("tipoEquipo").value;
    return cod; */

    /* Para obtener el texto */
    let combo = document.getElementById("tipoEquipo");
    let selected = combo.options[combo.selectedIndex].text;
    return selected
}

// limpiar select
function limpiarSelect() {

    let cod = document.getElementById("marca").value;
    while (cod.length > 0) {
        cod.remove(1);
    }
}

// Validacion checkbox unidad optica

const checkboxUO = document.getElementById('checkUO')

checkboxUO.addEventListener("change", validaCheckboxUO, false);

function validaCheckboxUO() {
    let checked = checkboxUO.checked;
    const verificacion = (checked) ? estado = 'SI' : estado = 'NO'
    return verificacion

    //version if
    /* if (checked) {
        let estado = 'SI'
        return estado

    } else {
        let estado = 'NO'
        return estado
    } */
}

// Validacon de check camara
const checkboxCamara = document.getElementById('checkCamara')

checkboxCamara.addEventListener("change", validaCheckCamara, false);

function validaCheckCamara() {
    let checked = checkboxCamara.checked;
    const verificacion = (checked) ? camara = 'SI' : camara = 'NO'
    return verificacion

    //version if
    /* if (checked) {
        let camara = 'SI'
        return camara
    } else {
        let camara = 'NO'
        return camara
    } */
}

// Validacion de check estado

const checkboxEstado = document.getElementById('checkActivo')

checkboxEstado.addEventListener("change", validacheckEstado, false);

function validacheckEstado() {
    let checked = checkboxEstado.checked;
    const verificacion = (checked) ? estado = 'Activo' : estado = 'Inactivo'
    return verificacion

    //version if
    /* if (checked) {
        estado = 'Activo'
        return estado
    } else {
        estado = 'Inactivo'
        return estado
    } */
}


window.addEventListener('load', loadArray(instanciaActivo.listarActivos()));

let buscador = document.getElementById('buscador');
buscador.addEventListener('change', buscar);


btnGuardar.addEventListener('click', (e) => {
    e.preventDefault();
    agregarActivo()
    modalContainer.classList.remove('modal-contenedor-activo');

    Toastify({
        text: 'Activo guardado con Exito!!',
        duration: 3000,
        position: 'right',
        gravity: 'top',
        backgroundColor: 'linear-gradient(to right, #00b09b, #96c92d)',
        offset: {
            x: '50px', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '50px' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
    }).showToast();
})


const abrirModalEditar = document.querySelector('#btnEditar');
const modalContainerEditar = document.querySelector('#modal-contenedor-editar')

/* abrirModalEditar.addEventListener('click', () => {
    modalContainerEditar.classList.add('modal-contenedor-activo')
}) */


abrirModalEditar.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn)
        modalContainerEditar.classList.add('modal-contenedor-activo')
    })
})

/* abrirModalEditar.forEach(btn => {
    btn.addEventListener('k', () => {
        console.log(btn)
        modalContainerEditar.classList.add('modal-contenedor-activo')
    })
}) */


const abrirModEditar = (/* marca,  */linea, serial, placa/* , modelo, tipoEquipo, unidadOptica, camara, contrato, estado */) => {

    /* const editarMarca = document.querySelector('#eMarca').value = marca */
    const editarLinea = document.querySelector('eLinea').value = linea;
    const editarSerial = document.querySelector('eSerial').value = serial;
    const editarPlaca = document.querySelector('ePlaca').value = placa;

}

const editarActivo = (index) => {

    /* console.log(activos[index].marca) */
    /* console.log(index) */

    const editActivo = { marca, linea, serial, placa, modelo, tipoEquipo, unidadOptica, camara, contrato, estado } = activos[index]

    abrirModEditar(linea, serial, placa);
}