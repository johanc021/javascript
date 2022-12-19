const correo = document.querySelector('#correo');

const password= document.querySelector('#password');

const btnIngresar = document.querySelector('#btnIniciarSesion');



//Recuperando usuario y contraseña para comparar
function verificarUsuarioContraseña() {
    let usuarioRecuperado = JSON.parse(sessionStorage.getItem('loginUsuario'));

    /* console.log(usuarioRecuperado.correo)
    console.log(usuarioRecuperado.password) */

    const verCorreo = (correo.value.trim() == usuarioRecuperado.correo) ? true : false
    const verPassword = (password.value.trim() == usuarioRecuperado.password) ? true : false

    if (verCorreo && verPassword){
        window.location.href = '../../pages/welcome/welcome.html';
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



