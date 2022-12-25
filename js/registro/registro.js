const rNombreApellido = document.querySelector("#rNombreApellido")
const rCorreo = document.querySelector('#rCorreo')
const rPassword = document.querySelector('#rPassword')
const repetirPassword = document.querySelector('#repetirPassword')
const btnRegistro = document.querySelector('#btnRegistro')

const validarNombreApellido = (texto) => {
    return /^[a-zA-Z\s]{5,}$/.test(texto);
}

const verificacionRegistro = () => {

    //variables para guardar resultados booleanos
    let booleanNombreApellido
    let booleanCorreo
    let booleanContrasena
    
    //validando Nombre y apellido
    if (validarNombreApellido(rNombreApellido.value)){
        booleanNombreApellido = true
        rNombreApellido.classList.remove('errorInput')
    } else {
        booleanNombreApellido = false
        rNombreApellido.classList.add('errorInput')
    }
    // validando correo
    if(validarCorreo(rCorreo.value)){
        booleanCorreo = true
        rCorreo.classList.remove('errorInput')
    } else {
        booleanCorreo = false
        rCorreo.classList.add('errorInput')
    }
    //validando contraseña
    if (validarContrasena(rPassword.value) && validarContrasena(repetirPassword.value)){
        if (rPassword.value == repetirPassword.value) {
            rPassword.classList.remove('errorInput')
            repetirPassword.classList.remove('errorInput')
            booleanContrasena = true
        } else {
            rPassword.classList.add('errorInput')
            repetirPassword.classList.add('errorInput')
        }
    }else {
        booleanContrasena = false
        rPassword.classList.add('errorInput')
        repetirPassword.classList.add('errorInput')
    }
    // validando variables resultados booleanos
    if(booleanNombreApellido && booleanCorreo  && booleanContrasena){
        guardando()
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hay errores en el formulario!!, recuerde la contraseña debe contener de 8 a 16 caracteres y debe contener letras minusculas, mayusculas, numeros y caracteres especiales ',
        })
    }

    // Guardando datos del formulario
    function guardando(){

        if (validarNombreApellido(rNombreApellido.value) && validarCorreo(rCorreo.value) && booleanContrasena) {
            const user1 = new usuario(rNombreApellido.value, rCorreo.value, rPassword.value)
            arrayUsuario.push(user1)

            sessionStorage.setItem('loginUsuario', JSON.stringify(user1));
            
            const registro = setTimeout(registrado, 0)

            const time = setTimeout(redirigiendo, 3000);
            

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'hubo un error al guardar el registro, intentalo nuevamente..',
            })
        } 
    }

}

// mensaje de registro
function registrado() {
    Swal.fire(
        'Registrado!.. en un momento sera redirigido'
    )
}

// redirigiendo al index - login
function redirigiendo(){
    window.location.href = '../../index.html'
}


const registro = (e) => {
    e.preventDefault()

    verificacionRegistro()
}

btnRegistro.addEventListener('click', registro)