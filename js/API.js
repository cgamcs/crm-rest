const url = 'http://localhost:4000/clientes'

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