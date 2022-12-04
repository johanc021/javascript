function cargarJSON() {
    fetch('../../json/usuarios.json')
        .then((resp) => resp.json())
        .then((data) => {
                console.log(data)
            let tabla = document.getElementById('tablaUsuarios');
            while (tabla.firstChild) {
                tabla.removeChild(tabla.firstChild);
            }

            data.forEach((usuario) => {
                
                const id = usuario.ID;
                const nombre = usuario.nombre;
                const tipoDocumento = usuario.tipoDocumento;
                const documento = usuario.documento;
                const correo = usuario.correo;
                const user = usuario.usuario;
                const tipoUsuario = usuario.tipoUsuario;

                const tr = document.createElement('tr')
                tr.innerHTML = `
            <tr>
                <td>${id}</td>
                <td>${nombre}</td>
                <td>${tipoDocumento}</td>
                <td>${documento}</td>
                <td>${correo}</td>
                <td>${user}</td>
                <td>${tipoUsuario}</td>
            </tr>
            `
            const btns = document.createElement('td')
            btns.innerHTML = `
            <td>
                <button id="${documento}" value="${id}" type="button" class="btn btn-secondary btn-sm">Editar</button>
                <button id= borrar-${id} value="${id}"type="button" class="btn btn-danger btn-sm">Eliminar</button>
            </td>
            `

            tr.append(btns);
            tabla.append(tr);


                // boton editar
                const editar = document.getElementById(documento);
                /* console.log(editar); */

                editar.addEventListener("click", (e) => {
                    /* console.log(e.target.id) */
                    /* console.log(e.target.value) */
                    if (e.target.id == parseInt(documento)) {
                        setTimeout(() =>{
                            Toastify({
                                text: 'El registro ' + id + ' de la tabla se editara',
                                duration: 3000,
                                position: 'right',
                                gravity: 'top',
                                backgroundColor: 'linear-gradient(to right, #00b09b, #96c92d)',
                                offset: {
                                    x: '50px', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                                    y: '50px' // vertical axis - can be a number or a string indicating unity. eg: '2em'
                                },
                            }).showToast();
                        }, 10000)
                    }

                });

                //boton borrar

                const borrar = document.getElementById(`borrar-${id}`)
                borrar.addEventListener("click", (e) => {
                    /* console.log(e.target.id) */
                    /* console.log(e.target.value) */

                    if (e.target.id == `borrar-${id}`){
                        setTimeout(() =>{
                            Toastify({
                                text: 'El registro ' + id + ' de la tabla se borrara',
                                duration: 3000,
                                position: 'right',
                                gravity: 'top',
                                backgroundColor: 'linear-gradient(to right, #00b09b, #96c92d)',
                                offset: {
                                    x: '50px', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                                    y: '50px' // vertical axis - can be a number or a string indicating unity. eg: '2em'
                                },
                            }).showToast();
                        }, 2000)
                        
                    }
                })


            });
            
                
        })
        .catch((error) => {
            console.log(error)
        })
}

cargarJSON()


const abrirModalEditar = document.querySelector('#btnEditar');
const modalContainerEditar = document.querySelector('#modal-contenedor-editar');
