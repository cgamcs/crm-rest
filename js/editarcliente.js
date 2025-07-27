import { obtenerCliente } from './API.js'
import { validar, mostrarAlerta } from './funciones.js'

(function() {
    // Campos del fomrulario
    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const telefonoInput = document.querySelector('#telefono')
    const empresaInput = document.querySelector('#empresa')
    const idInput = document.querySelector('#id')

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search)

        const idCliente = parseInt(parametrosURL.get('id'))

        const cliente = await obtenerCliente(idCliente)
        mostrarCliente(cliente)

        // Submit al formulario
        const fomrulario = document.querySelector('#formulario')
        fomrulario.addEventListener('submit', validarCliente)
    })

    function mostrarCliente(cliente) {
        const { nombre, email, telefono, empresa, id } = cliente

        nombreInput.value = nombre
        emailInput.value = email
        telefonoInput.value = telefono
        empresaInput.value = empresa
        idInput.value = id
    }

    function validarCliente(e) {
        e.preventDefault()

        const cliente = {
            id: idInput.value,
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value
        }

        console.log(cliente)

        if( validar(cliente) ) {
            // Mensaje de invalido
            mostrarAlerta('Todos los campos son obligatorios')
            return
        }

        // Reescribe el objeto
    }
})()