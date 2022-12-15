const contenedorActivos = document.querySelector('#tabla')

const abrirModal = document.querySelector('#abrir-modal')
const modalContainer = document.querySelector('#modal-contenedor')

const modalEditar = document.querySelector('#modal-contenedor-editar')


abrirModal.addEventListener('click', () => {
    modalContainer.innerHTML = `
        <div id="form-modal" class="form-modal">
            <form action="" class="form">
                <div class="container">
                <div class="modal-header mb-1">
                    <h5 class="modal-title"> Datos del Activo</h5>
                    <a type="button" id="cerrarModalC" class="btn-close"></a>
                </div>
                    <div class="row align-items-start">
                        <div class="col-6">
                            <div class="input-group mb-3">
                                <div class="col-12">
                                    <select id="marca" class="form-select" aria-label="Default select example" onchange="">
                                        <option selected>Seleccione una Marca</option>
                                        <option value="1">Asus</option>
                                        <option value="2">Acer</option>
                                        <option value="3">HP</option>
                                        <option value="4">Toshiba</option>
                                    </select>
                                </div>
                                <p class="error" id="errorMarca"></p>
                            </div>
                            <div class="input-group mb-3">
                                <div>
                                    <div class="input-group">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Linea</span>
                                        <input id="linea" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                    </div>
                                </div>
                                <p class="error" id="errorlinea"></p>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Serial</span>
                                    <input id="serial" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                </div>
                                <p class="error" id="errorSerial"></p>
                            </div>
                            <div class="input-group mb-3">
                                <div>
                                    <div class="input-group">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Placa</span>
                                        <input id="placa" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                    </div>
                                </div>
                                <p class="error" id="errorPlaca"></p>
                            </div>
                            <div class="input-group">
                                <div>
                                    <div class="input-group">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Modelo</span>
                                        <input id="modelo" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                    </div>
                                </div>
                                <p class="error" id="errorModelo"></p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="input-group mb-3">
                                <div class="col-12">
                                    <select id="tipoEquipo" class="form-select" aria-label="Default select example" onchange="">
                                        <option selected>Seleccione una Opción</option>
                                        <option value="1">Laptop - Portatil</option>
                                        <option value="2">Escritorio</option>
                                    </select>
                                </div>
                                <p class="error" id="errorTipoEquipos"></p>
                            </div>
                            <div class="input-group mb-3">
                                <div>
                                    <div class="input-group">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Contrato</span>
                                        <input id="contrato" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                    </div>
                                </div>
                                <p class="error" id="errorContrato"></p>
                            </div>
                            <div class="input-group mb-3">
                                <div class="form-check">
                                    <input id="checkUO" class="form-check-input" type="checkbox" >
                                    <label class="form-check-label" for="checkUO">
                                        Unidad Optica
                                    </label>
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkCamara">
                                    <label class="form-check-label" for="checkCamara">
                                        Camara
                                    </label>
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <div class="form-check">
                                    <input id="checkEstado" class="form-check-input" type="checkbox" value="">
                                    <label class="form-check-label" for="checkEstado">
                                        Activo
                                    </label>
                                </div>
                            </div>                         
                        </div>
                        <div class="col-12 mt-3 justify-content-center">
                            <button id="btnGuardar" type="submit" class="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </div>
            </form> 
        </div>
    `
    modalContainer.classList.add('modal-contenedor-activo')

    //boton cerrar modal crear activo
    const cerrarModal = document.querySelector('#cerrarModalC')
    cerrarModal.addEventListener('click', () => {

        modalContainer.classList.remove('modal-contenedor-activo');
    })
    
    // boton guardar modal
    const btnGuardar = document.querySelector('#btnGuardar')
    btnGuardar.addEventListener('click', (e) => {
        e.preventDefault();
        guardarActivo()
    })
})

// array activo
const arrayActivo = []

/* console.log(arrayActivo) */

// agregando los activos al arrayActivo
activos.forEach((activo) => {
    arrayActivo.push(activo)
})

function Activo(id, marca, linea, serial, placa, modelo, tipoEquipo, unidadOptica, camara, contrato, estado){
    this.id = id,
    this.marca = marca,
    this.linea = linea,
    this.serial = serial,
    this.placa = placa,
    this.modelo = modelo,
    this.tipoEquipo = tipoEquipo,
    this.unidadOptica = unidadOptica,
    this.camara = camara,
    this.contrato = contrato,
    this.estado = estado
}

//carnando arraActivos y recorrido
const loadArray = (arrayActivo) => {

    let tabla = document.querySelector('#tabla');
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }

        arrayActivo.forEach((activo, index) => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
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
                <button id=${activo.placa} type="button" class="btn btn-secondary btn-sm">Editar</button>
                <button id=${activo.id} type="button" class="btn btn-danger btn-sm">Eliminar</button>
            </td>
        `

            tr.append(btns);
            contenedorActivos.append(tr);

            //Boton editar
            const btnEditar = document.getElementById(activo.placa);

            btnEditar.addEventListener("click", (e) => {
                //openModal(e.target.id);
                openModal(activo.placa)
                //console.log(activo.id)
            });

            //boton eliminar
            const eliminar = document.getElementById(activo.id)
            //console.log(eliminar)

            eliminar.addEventListener("click", (e) => {
                eliminarActivo(index)
                //console.log(e.target.id)
            })

        });

}
//Carga de tabla
loadArray(arrayActivo)


const verificar = () => {

}

const guardarActivo = () => {

    //obtiene index ultimo elemento del array
    let index = arrayActivo.length - 1
    //suma 1 al ultimo elemento id del array para el nuevo registro
    let id = arrayActivo[index].id + 1

    let marca = document.querySelector('#marca')
    let selectMarca = marca.options[marca.selectedIndex].text

    let linea = document.querySelector('#linea').value
    
    let serial = document.querySelector('#serial').value

    let placa = document.querySelector('#placa').value

    let modelo = document.querySelector('#modelo').value

    let tipoEquipo = document.querySelector('#tipoEquipo')
    let selectTipoEquipo = tipoEquipo.options[tipoEquipo.selectedIndex].text 

    let unidadOptica = verificarCheck(document.querySelector('#checkUO').checked)
    
    let camara = verificarCheck(document.querySelector('#checkCamara').checked)

    let contrato = document.querySelector('#contrato').value

    let estado = verificarCheck(document.querySelector('#checkEstado').checked)

    let nuevoActivo = new Activo(id, selectMarca, linea, serial, placa, modelo, selectTipoEquipo, unidadOptica, camara, contrato, estado)

    arrayActivo.push(nuevoActivo)
    loadArray(arrayActivo)
    modalContainer.classList.remove('modal-contenedor-activo')
}

const verificarCheck = (checked) => {
    const verificacion = (checked) ? estado = 'SI' : estado = 'NO'
    return verificacion
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
            arrayActivo.splice(index, 1);
            loadArray(arrayActivo)

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

const openModal = (id) => {

    const activo = activos.find((activo) => activo.placa === parseInt(id));

    /* console.log(activo) */
    /* const checkunidadO = activo.unidadOptica;
    const checkCam = activo.camara;
    const checkEst = activo.estado; */


    /* console.log(checkunidadO) */
    modalEditar.innerHTML = `
            <div id="form-modal" class="form-modal">
                <form action="" class="form" onsubmit="return false">
                    <div class="modal-header mb-1">
                        <h5 class="modal-title">Editar Activo</h5>
                        <a type="button" id="cerrarModalE" class="btn-close"></a>
                    </div>
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
                                <div class="input-group">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Linea</span>
                                    <input id="eLinea" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value = "">
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Serial</span>
                                <input id="eSerial" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value = "">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Placa</span>
                                    <input id="ePlaca" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value = "" readonly>
                                </div>
                            </div>
                            <div class="input-group">
                                <div class="input-group">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Modelo</span>
                                    <input id="eModelo" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value = "">
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
                                <div class="input-group">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Contrato</span>
                                    <input id="eContrato" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value = "">
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
                </form> 
            </div>
    `
    modalEditar.classList.add('modal-contenedor-activo')

    //Cerrar modal crear activo
    const cerrarModal = document.querySelector('#cerrarModalE')
    cerrarModal.addEventListener('click', (e) => {
        modalEditar.classList.remove('modal-contenedor-activo');
    })

    /* const verificacionCheckOU = (checkunidadO == 'SI') ? document.getElementById("eCheckUO").checked = true : document.getElementById("echeckUO").checked = false;

    const verificacionCheckCam = (checkCam == 'SI') ? document.getElementById("eCheckCamara").checked = true : document.getElementById("eCheckCamaraO").checked = false;

    const verificacionCheckEst = (checkEst == 'SI') ? document.getElementById("eCheckActivo").checked = true : document.getElementById("eCheckActivo").checked = false; */

    /* cargar_marcas()
    cargar_tiposEquipos( )*/


    /* const btnActu = document.querySelector('#btnActualizar');
    btnActu.addEventListener('click', () => {
        actualizarActivo(activo.placa);
        modalContainerEditar.classList.remove('modal-contenedor-activo');
    })

    editCheckUnidadOptica()
    editCheckCamara()
    editCheckEstado() */

};



/* guardar.addEventListener('click', (e) =>{
    e.preventDefault();
} ) */
    /* guardar.addEventListener('click', alert('estoy en el boton')) */





    //copia modal crear activo

/* <div id="form-modal" class="form-modal">
    <form action="" class="form">
        <div class="container">
            <div class="modal-header mb-1">
                <h5 class="modal-title"> Datos del Activo</h5>
                <a type="button" id="cerrarModalC" class="btn-close"></a>
            </div>
            <div class="row align-items-start">
                <div class="col-6">
                    <div class="input-group mb-3">
                        <div class="col-12">
                            <select id="marca" class="form-select" aria-label="Default select example" onchange="">
                                <option selected>Seleccione una Marca</option>
                                <option value="1">Asus</option>
                                <option value="2">Acer</option>
                                <option value="3">HP</option>
                                <option value="4">Toshiba</option>
                            </select>
                        </div>
                        <p class="error" id="errorMarca"></p>
                    </div>
                    <div class="input-group mb-3">
                        <div>
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroup-sizing-default">Linea</span>
                                <input id="linea" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            </div>
                        </div>
                        <p class="error" id="errorlinea"></p>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group">
                            <span class="input-group-text" id="inputGroup-sizing-default">Serial</span>
                            <input id="serial" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                        <p class="error" id="errorSerial"></p>
                    </div>
                    <div class="input-group mb-3">
                        <div>
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroup-sizing-default">Placa</span>
                                <input id="placa" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            </div>
                        </div>
                        <p class="error" id="errorPlaca"></p>
                    </div>
                    <div class="input-group">
                        <div>
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroup-sizing-default">Modelo</span>
                                <input id="modelo" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            </div>
                        </div>
                        <p class="error" id="errorModelo"></p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="input-group mb-3">
                        <div class="col-12">
                            <select id="tipoEquipo" class="form-select" aria-label="Default select example" onchange="">
                                <option selected>Seleccione una Opción</option>
                                <option value="1">Laptop - Portatil</option>
                                <option value="2">Escritorio</option>
                            </select>
                        </div>
                        <p class="error" id="errorTipoEquipos"></p>
                    </div>
                    <div class="input-group mb-3">
                        <div>
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroup-sizing-default">Contrato</span>
                                <input id="contrato" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            </div>
                        </div>
                        <p class="error" id="errorContrato"></p>
                    </div>
                    <div class="input-group mb-3">
                        <div class="form-check">
                            <input id="checkUO" class="form-check-input" type="checkbox" >
                                <label class="form-check-label" for="checkUO">
                                    Unidad Optica
                                </label>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="checkCamara">
                                <label class="form-check-label" for="checkCamara">
                                    Camara
                                </label>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <div class="form-check">
                            <input id="checkActivo" class="form-check-input" type="checkbox" value="">
                                <label class="form-check-label" for="checkActivo">
                                    Activo
                                </label>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-3 justify-content-center">
                    <button id="btnGuardar" type="submit" class="btn btn-primary">Enviar</button>
                </div>
            </div>
        </div>
    </form>
</div> */