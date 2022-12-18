class usuario {
    constructor(nombre, apellido, cedula, correo, nombreUsuario, password) {
        this.nombre = nombre
        this.apellido = apellido
        this.cedula = cedula
        this.correo = correo
        this.nombreUsuario = nombreUsuario
        this.password = password
    }
}


// Instanciando un usuario

const user = new usuario('Johan', 'Castellanos', 1077033245, 'facjohan@gmail.com', 'Johan022', '9876');
// Agregando al array.
const arrayUsuario = [user];
/* console.log(arrayusuario) */

//agregando al session Storage
/* sessionStorage.setItem('loginUsuario', JSON.stringify(user)); */


/*---------------------LOGIN------------------*/
/*--------------1-Variables y constantes-----*/

/*-------------2-QuerySelectors-------------*/
const emailInicioSesion = document.querySelector('#correo');

const contrasenaInicioSesion = document.querySelector('#password');

/* const visibilidadContrasena = document.querySelector('.visibilidadContrasena'); */

/* const recordarInicioSesion = document.querySelector('#recordarInicioSesion'); */

const btnIngresar = document.querySelector('#btnIniciarSesion');


/* -----------3-Funciones-------------------*/
function recuperarUsuarioGuardado() {
    let usuarioRecuperado = JSON.parse(sessionStorage.getItem('usuarioGuardado'));
    /* console.log(localStorage.getItem('loginUsuario')); */


    emailInicioSesion.value = usuarioRecuperado.correo;
    contrasenaInicioSesion.value = usuarioRecuperado.password;

    /* recordarInicioSesion.checked = true; */
}


const verificarUsuarioEmail = (email) => {
    const usuario = arrayUsuario.some((usuario => usuario.correo === email));
    return usuario;
}

const buscarUsuario = (email) => {
    const usuario = arrayUsuario.find((usuario => usuario.correo === email));
    return usuario;
}

function mostrarPassword() {
    contrasenaInicioSesion.setAttribute('type', 'text');

}

/* function ocultarPassword() {
    contrasenaInicioSesion.setAttribute('type', 'password');
} */

//Funcion anonima iniciar sesion
const iniciarSesion = function (event) {
    event.preventDefault();

    if (verificarUsuarioEmail(emailInicioSesion.value)) {
        //Aplicando la desestructuracion de objetos
        const { nombre, apellido, correo, password } = buscarUsuario(emailInicioSesion.value);

        if (password === contrasenaInicioSesion.value) {
            const login = {
                nombre: nombre,
                apellido: apellido,
                correo: correo,
            }

            sessionStorage.setItem('login', JSON.stringify(login));

            const guardar = JSON.stringify(recordarUsuario);
            localStorage.setItem('usuarioGuardado', guardar);

            /* if (recordarInicioSesion.checked) {
                const recordarUsuario = {
                    correo: correo,
                    password: password
                }

                
            } */

            window.location.href = '../../index.html';


        } else {
            alertaError(`La contraseña ingresada no corresponde con el usuario con email ${emailInicioSesion.value}`);
        }
    } else {
        alertaInformacion(`El email ingresado ${emailInicioSesion.value} no se encuentra registrado como usuario. Por favor, registresé en la seccion "Creá tu cuenta".`);
    }
}

/* -----------4-EventListeners-------------------*/
/* visibilidadContrasena.addEventListener('mousedown', mostrarPassword); */

/* visibilidadContrasena.addEventListener('touchstart', mostrarPassword);

visibilidadContrasena.addEventListener('mouseup', ocultarPassword);

visibilidadContrasena.addEventListener('touchend', ocultarPassword); */

btnIngresar.addEventListener('click', iniciarSesion);
/* -----------5-Ejecuciones y otros-------------------*/
recuperarUsuarioGuardado();

