/*-------------2-QuerySelectors-------------*/
const correo = document.querySelector('#correo');

const password= document.querySelector('#password');

const btnIngresar = document.querySelector('#btnIniciarSesion');


//Recuperando usuario y contraseña para comparar
function verificarUsuarioContraseña() {
    let usuarioRecuperado = JSON.parse(sessionStorage.getItem('loginUsuario'));

    const verCorreo = (correo.value == usuarioRecuperado.correo) ? true : false
    const verPassword = (password.value == usuarioRecuperado.password) ? true : false

    if (verCorreo && verPassword){
        window.location.href = '../../welcome.html';
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El correo electronico o contraseña son incorrectos!',
        })
    }
}

const iniciarSesion = function (e) {
    e.preventDefault();

    verificarUsuarioContraseña()
}

btnIngresar.addEventListener('click', iniciarSesion);