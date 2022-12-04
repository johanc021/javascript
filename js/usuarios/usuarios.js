/* const tablaUsuarios = document.getElementById('tablaUsuarios'); */


function cargarJSON() {
    fetch('../../json/usuarios.json')
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)

            data.forEach((usuario) => {
                const bodyTabla = document.querySelector('#tablaUsuarios')
                bodyTabla.innerHTML += `
                    <tr>
                        <td>${usuario.ID}</td>
                        <td>${usuario.nombre}</td>
                        <td>${usuario.tipoDocumento}</td>
                        <td>${usuario.documento}</td>
                        <td>${usuario.correo}</td>
                        <td>${usuario.usuario}</td>
                        <td>${usuario.tipoUsuario}</td>
                        <td>
                            <button id="${usuario.documento}" type="button" class="btn btn-secondary btn-sm">Editar</button>
                            <button onclick="eliminarActivo(${usuario.ID})" type="button" class="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                    </tr>
                `


                //para boton editar
                const editar = document.getElementById(usuario.documento);
                /* console.log(editar); */
                editar.addEventListener('click', () => {
                    /* modalContainerEditar.classList.add('modal-contenedor-activo') */

                    const editar = document.getElementById(usuario.documento);

                    editar.addEventListener("click", (e) => {
                        console.log(usuario.documento)
                        /* openModal(e.target.id); */
                        

                    });
                })
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

cargarJSON()