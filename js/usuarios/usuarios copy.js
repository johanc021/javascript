/* const tablaUsuarios = document.getElementById('tablaUsuarios'); */


function cargarJSON(){
    fetch('../../json/usuarios.json')
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)

            data.forEach((usuario) => {
                const bodyTabla = document.querySelector('#tablaUsuarios')
                /* while (bodyTabla.firstChild) {
                    bodyTabla.removeChild(bodyTabla.firstChild);
                } */
                bodyTabla.innerHTML = `
                    <tr>
                        <td>${usuario.ID}</td>
                        <td>${usuario.nombre}</td>
                        <td>${usuario.tipoDocumento}</td>
                        <td>${usuario.documento}</td>
                        <td>${usuario.correo}</td>
                        <td>${usuario.usuario}</td>
                        <td>${usuario.tipoUsuario}</td>
                        <td>
                            <button id="${usuario.ID}" type="button" class="btn btn-secondary btn-sm">Editar</button>
                            <button onclick="eliminarActivo(${usuario.ID})" type="button" class="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                    </tr>
                `
                        /* const btns = document.createElement('td')
                        btns.innerHTML = `
                    <td>
                        <button id="${usuario.ID}" type="button" class="btn btn-secondary btn-sm">Editar</button>
                        <button onclick="eliminarActivo(${usuario.ID})" type="button" class="btn btn-danger btn-sm">Eliminar</button>
                    </td>
                ` */

                /* bodyTabla.append(btns); */
                /* tabla.append(bodyTabla); */
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

cargarJSON()