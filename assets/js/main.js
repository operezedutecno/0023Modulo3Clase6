// Definicion arreglo para guardar la lista de colores
var colores = []
var listado = document.querySelector("#listado-colores tbody")

// Estructura reptitiva para capturar 5 colores
for (let index = 1; index <= 5; index++) {

    do {
        var color = prompt(`Ingresar color Nro (${index})`)

        // convertimos en minúsculas el color enviado por el usuario (estandarizar el texto)
        color = color.toLowerCase()

        // convertimos en mayúsculas el color enviado por el usuario (estandarizar el texto)
        // color = color.toUpperCase()

        // Condición para verificar si el color ya existe, si no existe lo agrega al arreglo
        var agregar = !colores.includes(color)
        if(agregar) {
            // Función push que agrega un elemento al final de arreglo
            colores.push(color)
        } else {
            alert("Hubo un error registrando el color, intente nuevamente")
        }

    } while (!agregar);
}

mostrarColores();


function mostrarColores() {
    listado.innerHTML = ""
    colores.forEach((color, index) => {
        listado.innerHTML += `
            <tr>
                <td>${color}</td>
                <td style="background: ${color}"></td>
                <td><button type="button" class="btn btn-sm btn-danger" onClick="eliminar(${index})">Eliminar</button></td>
            </tr>
        ` 
    })
}

function eliminar(indice) {
    if(confirm(`¿Seguro que desea eliminar el color ${colores[indice]}?`)){
        var eliminado = colores.splice(indice, 1)
        alert(`Usted ha eliminado el color ${eliminado[0]}`)
        mostrarColores()
    }
}