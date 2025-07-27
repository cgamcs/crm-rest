const url = 'http://localhost:4000/clientes'

// Cuando se crea un nuevo cliente
export const nuevoCliente = async cliente => {
    const params = {
        method: 'POST',
        body: JSON.stringify(cliente),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    try {
        await fetch(url, params)

        window.location.href = 'index.html'
    } catch (error) {
        console.log(error)
    }
}

// Obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url)
        const clientes = await resultado.json()

        return clientes
    } catch (error) {
        console.log(error)
    }
}

// Elimina un cliente
export const eliminarCliente = async id => {
    const params = {
        method: 'DELETE'
    }

    try {
        await fetch(`${url}/${id}`, params)
    } catch (error) {
        console.log(error)
    }
}

// Obtiene un cliente por su ID
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`)
        const cliente = await resultado.json()

        return cliente
    } catch (error) {
        console.log(error)
    }
}