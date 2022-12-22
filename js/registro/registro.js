const rNombreApellido = document.querySelector("#rNombreApellido")
const rCorreo = document.querySelector('#rCorreo')
const rPassword = document.querySelector('#rPassword')
const repetirPassword = document.querySelector('#repetirPassword')
const btnRegistro = document.querySelector('#btnRegistro')

const validarNombreApellido = (texto) => {
    return /^[A-Za-z\s{1,5}]+$/g.test(texto);
}

const validarCorreo = (correo) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(correo)
}

const validarContraseña = (pass) => {
    return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/g.test(pass)
}

/* console.log(validarContraseña('Jomi4512#$#')) */

const verificacionRegistro = () => {

    let verContraseña

    const verNombreApellido = (!validarNombreApellido(rNombreApellido.value)) ? rNombreApellido.classList.add('errorInput') : rNombreApellido.classList.remove('errorInput') 
    /* console.log(verNombreApellido) */
    const verCorreo = (!validarCorreo(rCorreo.value)) ? rCorreo.classList.add('errorInput') : rCorreo.classList.remove('errorInput')

    if (rPassword.value != "" || repetirPassword.value != "") {
        if (rPassword.value == repetirPassword.value){
            if (validarContraseña(rPassword.value) && validarContraseña(rPassword.value)){
                rPassword.classList.remove('errorInput')
                repetirPassword.classList.remove('errorInput')
                verContraseña = true
                guardando()
            }else{
                rPassword.classList.add('errorInput')
                repetirPassword.classList.add('errorInput')

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'La contraseña debe contener de 8 a 16 caracteres y debe contener mayusculas, minusculas, numeros y caracteres especiales .',
                })
            }
        }else{
            rPassword.classList.add('errorInput')
            repetirPassword.classList.add('errorInput')
        }        
    } else {
        rPassword.classList.add('errorInput')
        repetirPassword.classList.add('errorInput')
    }

    /* console.log(verContraseña) */

    function guardando(){
        if (validarNombreApellido(rNombreApellido.value) && validarCorreo(rCorreo.value) && verContraseña) {
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

function registrado() {
    Swal.fire(
        'Registrado!.. en un momento sera redirigido'
    )
}

function redirigiendo(){
    window.location.href = '../../index.html'
}

const registro = (e) => {
    e.preventDefault()

    verificacionRegistro()
}

btnRegistro.addEventListener('click', registro)