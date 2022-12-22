const correo = document.querySelector('#correo');

const password= document.querySelector('#password');

const btnIngresar = document.querySelector('#btnIniciarSesion');


let usuarioRecuperado = JSON.parse(sessionStorage.getItem('loginUsuario'));

//Recuperando usuario y contraseña para comparar
function verificarUsuarioContraseña() {

    /* console.log(usuarioRecuperado.correo)
    console.log(usuarioRecuperado.password) */

    const verCorreo = (correo.value.trim() == usuarioRecuperado.correo) ? true : false
    const verPassword = (password.value.trim() == usuarioRecuperado.password) ? true : false

    if (verCorreo && verPassword){
        
        const msglogueado = setTimeout(ingresando(usuarioRecuperado.nombreApellido), 0)

        const redirigir = setTimeout(redirigiendoWelcome, 3000)
        
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El correo electronico o contraseña son incorrectos!',
        })
    }

    
}

function ingresando(texto) {
    Swal.fire({
        title: "Bienvenido!!",
        text: texto,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#3085d6',
        color: '#FCFCFC',
        background: '#252525'
    })
}

function redirigiendoWelcome() {
    window.location.href = '../../pages/welcome/welcome.html';
}


const iniciarSesion = function (e) {
    e.preventDefault();

    verificarUsuarioContraseña()
}

btnIngresar.addEventListener('click', iniciarSesion);



