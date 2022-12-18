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
sessionStorage.setItem('loginUsuario', JSON.stringify(user));