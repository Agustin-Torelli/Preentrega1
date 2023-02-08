//const formulario = document.getElementById("formu"); //llamamos al formulario

//leemos los datos del imput del formulario de consultas

// leyendo y almacenando en el storage
let pacientes = []

const pasientesLS = JSON.parse(localStorage.getItem('pacientes')) //estado inicial condicionado al localstorage

if (pasientesLS){
    pacientes = pasientesLS
}
   
        const impnombre = document.getElementById("impnombre")//toUpperCase
        const impapellido = document.getElementById("impapellido")
        const impedad = document.getElementById("impedad")
        const impemail = document.getElementById("impemail")
        const impcelular = document.getElementById("impcelular")
        const impsexo = document.getElementById("impsexo")
        const impmensaje = document.getElementById("impmensaje")
        const btnEnviarConsulta = document.getElementById("btnEnviarConsulta")
        
btnEnviarConsulta.addEventListener('click', () => {
//e.preventDefault()
   
    const nombre = impnombre.value
    const apellido = impapellido.value
    const edad = impedad.value
    const email = impemail.value
    const celular = impcelular.value
    const sexo = impsexo.value
    const mensaje = impmensaje.value

    if(nombre ==='', apellido ==='', email === '', sexo ==='', mensaje === '') return //valido

    const pasc = {
        id: pacientes.length + 1,
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        email: email,
        celular: celular,
        sexo: sexo,
        mensaje: mensaje
    }

    pacientes.push(pasc)

    nombre.value =''

    const pacientesJSON = JSON.stringify(pacientes)  //los voy agregando en el local storage
    localStorage.setItem('pacientes', pacientesJSON)

})
console.table(pacientes)

//lista de usarios registrados

