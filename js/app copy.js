const abrirModal = document.querySelector('#abrir-modal')
const cerrarModal = document.querySelector('#cerrar-modal')
const modalContainer = document.querySelector('#modal-contenedor')



abrirModal.addEventListener('click', () => {
    modalContainer.classList.add('modal-contenedor-activo')
})

const activos = [
    {
        id: 1,
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
        id: 2,
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

    Actualizar(placa){
        const actualizar = activos.find((activo) => activo.placa == placa);
        return actualizar;
    }
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
                <button id="${activo.placa}" type="button" class="btn btn-secondary btn-sm">Editar</button>
                <button onclick="eliminarActivo(${index})" type="button" class="btn btn-danger btn-sm">Eliminar</button>
            </td>
        `

            tr.append(btns);
            tabla.append(tr);

            //para boton editar
            const editar = document.getElementById(activo.placa);
            /* console.log(editar); */
                /* modalContainerEditar.classList.add('modal-contenedor-activo') */

                editar.addEventListener("click", (e) => {
                    openModal(e.target.id);
                    /* openModal(activo.placa) */
                });


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

const openModal = (id) => {


    const activo = activos.find((activo) => activo.placa === parseInt(id));
    const checkunidadO = activo.unidadOptica;
    const checkCam = activo.camara;
    const checkEst = activo.estado;


    /* console.log(checkunidadO) */
    modalContainerEditar.innerHTML = `
            <div id="form-modal" class="form-modal">
                <form action="" class="form" onsubmit="return false">
                    <div>
                    <div class="row align-items-start">
                            <div class="col-6">
                                <div class="input-group mb-3">
                                    <div class="col-12">
                                        <select id="eMarca" name = "eMarca" class="form-select" aria-label="Default select example" onchange="selectMarca()">
                                            <option selected>Seleccione una Marca</option>
                                            
                                        </select>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <div>
                                        <div class="input-group">
                                            <span class="input-group-text" id="inputGroup-sizing-default">Linea</span>
                                            <input id="eLinea" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value = "${activo.linea}">
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Serial</span>
                                        <input id="eSerial" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value = "${activo.serial}">
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <div>
                                        <div class="input-group">
                                            <span class="input-group-text" id="inputGroup-sizing-default">Placa</span>
                                            <input id="ePlaca" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value = "${activo.placa}" readonly>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group">
                                    <div>
                                        <div class="input-group">
                                            <span class="input-group-text" id="inputGroup-sizing-default">Modelo</span>
                                            <input id="eModelo" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value = "${activo.modelo}">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="input-group mb-3">
                                    <div class="col-12">
                                        <select id="eTipoEquipo" name = "eTipoEquipo" class="form-select" aria-label="Default select example" onchange="selectTipoPortatil()">
                                            <option selected>Seleccione una Opción</option>
                                        </select>
                                    </div>
                                    
                                </div>
                                <div class="input-group mb-3">
                                    <div>
                                        <div class="input-group">
                                            <span class="input-group-text" id="inputGroup-sizing-default">Contrato</span>
                                            <input id="eContrato" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value = "${activo.contrato}">
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <div class="form-check">
                                        <input id="eCheckUO" class="form-check-input" type="checkbox" >
                                        <label class="form-check-label" for="eCheckUO">
                                            Unidad Optica
                                        </label>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="eCheckCamara">
                                        <label class="form-check-label" for="eCheckCamara">
                                            Camara
                                        </label>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <div class="form-check">
                                        <input id="eCheckActivo" class="form-check-input" type="checkbox" value="">
                                        <label class="form-check-label" for="eCheckActivo">
                                            Activo
                                        </label>
                                    </div>
                                </div>                         
                            </div>
                            <div class="col-12 mt-3 justify-content-center">
                                <button id="btnActualizar" type="submit" class="btn btn-primary">Enviar</button>
                            </div>
                        </div>
                    </div>
                </form> 
            </div>
    `

    modalContainerEditar.classList.add('modal-contenedor-activo')

    const verificacionCheckOU = (checkunidadO == 'SI') ? document.getElementById("eCheckUO").checked = true : document.getElementById("echeckUO").checked = false;

    const verificacionCheckCam = (checkCam == 'SI') ? document.getElementById("eCheckCamara").checked = true : document.getElementById("eCheckCamaraO").checked = false;

    const verificacionCheckEst = (checkEst == 'SI') ? document.getElementById("eCheckActivo").checked = true : document.getElementById("eCheckActivo").checked = false;

    cargar_marcas()
    cargar_tiposEquipos()


    const btnActu = document.querySelector('#btnActualizar');
    btnActu.addEventListener('click', () => {
        actualizarActivo(activo.placa);
        modalContainerEditar.classList.remove('modal-contenedor-activo');
    })

    editCheckUnidadOptica()
    editCheckCamara()
    editCheckEstado()
    
};

// funcion para cargar array tipos de equipos

function cargar_tiposEquipos() {
    const arraySelectTipoEquipos = ["Laptop - portatil", "Escritorio"];

    // Ordena el Array Alfabeticamente)):
    arraySelectTipoEquipos.sort();

    
    agregarOpcionesTiposEquipos("eTipoEquipo", arraySelectTipoEquipos)
    
}

//carga de datos select tipos equipos

function agregarOpcionesTiposEquipos(elementoDOM, array) {
    const select = document.getElementsByName(elementoDOM)[0];
    for (valor in array) {
        const opcion = document.createElement("option");
        opcion.text = array[valor];
        select.add(opcion);
    }
}

// funcion para cargar array marcas

function cargar_marcas() {
    const arrayMarcas = ["Asus", "Acer", "HP", "Toshiba"];

    // Ordena el Array Alfabeticamente)):
    arrayMarcas.sort();

    agregarOpcionesMarca("eMarca", arrayMarcas);
}

//carga de datos select marcas

function agregarOpcionesMarca(elementoDOM, array) {
    const select = document.getElementsByName(elementoDOM)[0];

    for (valor in array) {
        const opcion = document.createElement("option");
        opcion.text = array[valor];
        select.add(opcion);
    }
}

// Validacion checkbox unidad optica para editar

const editCheckUnidadOptica = () => {
    //validacion check unidad optica - Editar
    const eCheckboxUO = document.getElementById('eCheckUO')
    eCheckboxUO.addEventListener("change", evalidaCheckboxUO, false);

    function evalidaCheckboxUO() {
        let checked = eCheckboxUO.checked;
        const verificacion = (checked) ? estado = 'SI' : estado = 'NO'
        /* console.log(verificacion) */
        return verificacion
    }
}

const editCheckCamara = () => {
    // Validacon de check camara para editar
    const eCheckboxCamara = document.getElementById('eCheckCamara')

    eCheckboxCamara.addEventListener("change", evalidaCheckCamara, false);

    function evalidaCheckCamara() {
        let checked = eCheckboxCamara.checked;
        const verificacion = (checked) ? camara = 'SI' : camara = 'NO'
        /* console.log(verificacion) */
        return verificacion
    }
}

const editCheckEstado = () => {
    // Validacion de check estado para editar

    const eCheckboxEstado = document.getElementById('eCheckActivo')

    eCheckboxEstado.addEventListener("change", evalidacheckEstado, false);

    function evalidacheckEstado() {
        let checked = eCheckboxEstado.checked;
        const verificacion = (checked) ? estado = 'Activo' : estado = 'Inactivo'
        /* console.log(verificacion) */
        return verificacion
    }
    
}



const actualizarActivo = (index) => {

    Swal.fire({
        title: 'Está seguro de actualizar el registro?',
        text: 'Esta acción no es reversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {

        if (result.isConfirmed) {

            //Actualiza activo
            const activo = activos.find((activo) => activo.placa === parseInt(index));
            /* console.log(activo.contrato) */
            activo.marca = eSelectMarca();
            activo.linea = document.querySelector('#eLinea').value;
            activo.serial = document.querySelector('#eSerial').value;
            activo.placa = document.querySelector('#ePlaca').value;
            activo.modelo = document.querySelector('#eModelo').value;
            activo.tipoEquipo = eSelectTipoEquipo();
            activo.contrato = document.querySelector('#eContrato').value;
            activo.unidadOptica = 'NO';

            loadArray(instanciaActivo.listarActivos());

            //confirma la actualizacion
            Swal.fire({
                title: 'Actualizado correctamente',
                icon: 'success',
                confirmButtonText: 'Cerrar',
                timer: 1500
            })
        }
    })
    

}

// Select Marca
function eSelectMarca() {
    /* Para obtener el valor */
    /* let cod = document.getElementById("marca").value;
    return cod; */

    /* Para obtener el texto */
    let combo = document.getElementById("eMarca");
    let selected = combo.options[combo.selectedIndex].text;
    return selected
}

// Select tipo Equipo
function eSelectTipoEquipo() {
    /* Para obtener el valor */
    /* let cod = document.getElementById("tipoEquipo").value;
    return cod; */

    /* Para obtener el texto */
    let combo = document.getElementById("eTipoEquipo");
    let selected = combo.options[combo.selectedIndex].text;
    return selected
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
const modalContainerEditar = document.querySelector('#modal-contenedor-editar');

