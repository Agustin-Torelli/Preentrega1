const listaPacientes = document.getElementById('listaPacientes')

const pacientesJSON = localStorage.getItem('pacientes')  //los voy agregando en el local storage
const pacientes = JSON.parse(pacientesJSON)

console.table(pacientes)

    pacientes.forEach((pasc) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <form  class="row mb-4">
    <div class="col-4  text-start">
        <h3>Nombre: ${pasc.nombre}, ${pasc.apellido}, Edad: ${pasc.edad}</h3>
        <p>Email: ${pasc.email} Celular: ${pasc.celular}</p>
    </div>
    <div class="col-7 text-start">
        <p> Mensaje: <br> ${pasc.mensaje}</p>
    </div>
    <div class="col-1 d-flex flex-row-reverse align-self-center " >
    <button  id="Eliminar" class="btn btn-danger"><i class="bi bi-trash3-fill"></i></button>
    </div>
    </form> 
    `

    listaPacientes.append(div)
   



})
 const elimina = document.getElementById('Eliminar')

 elimina.addEventListener('click', () => {
    localStorage.removeItem('paciente')
    listaPacientes.innerHTML = 'Se borró el listado'
 })





