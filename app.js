// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let listaNombreAmigos = ['María', 'Ana', 'Pedro', 'Andrés', 'Pablo', 'Antonio', 'Rosa'];

// Generar un nombre secreto aleatorio
let nombreSecreto = generarNombreSecreto();
console.log(`Nombre Secreto: ${nombreSecreto}`);

// Función para generar el nombre secreto
function generarNombreSecreto() {
    let indiceAleatorio = Math.floor(Math.random() * listaNombreAmigos.length);
    return listaNombreAmigos[indiceAleatorio];
}

// Mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de agregar los elementos

    listaNombreAmigos.forEach((nombre) => {
        const item = document.createElement('li');
        item.textContent = nombre;
        lista.appendChild(item);
        lista.appendChild(option);
    });
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const agregaNombre = document.getElementById('nombreAmigo').value.trim();
    const resultado = document.getElementById('resultado');
    // Limpiar mensajes previos
    resultado.innerHTML = ''; 

    if (agregaNombre === '') {
        // Si el campo está vacío, mostrar aviso
        const avisoUsuario = document.createElement('li');
        avisoUsuario.textContent = 'Por favor, escribe un nombre antes de añadirlo.';
        resultado.appendChild(avisoUsuario);
        return;
    }

    if (listaNombreAmigos.includes(inputNombre)) {
        // Si el nombre ya está en la lista, mostrar aviso
        const avisoError = document.createElement('li');
        avisoError.textContent = 'Este nombre ya está en la lista.';
        resultado.appendChild(avisoError);
        return;
    }

    // Agregar el nombre a la lista 
    listaNombreAmigos.push(agregaNombre);
    mostrarListaAmigos();

    // Mostrar mensaje de éxito
    const avisoExito = document.createElement('li');
    avisoExito.textContent = `Nombre añadido: ${agregaNombre}`;
    resultado.appendChild(avisoExito);

    // Limpiar el campo de entrada
    document.getElementById('nombreAmigo').value = '';
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    // Limpiar mensajes previos
    resultado.innerHTML = ''; 

    if (listaNombreAmigos.length === 0) {
        // Si la lista de amigos está vacía
        const avisoUsuario = document.createElement('li');
        avisoUsuario.textContent = 'La lista de amigos está vacía. Añade nombres para sortear.';
        resultado.appendChild(avisoUsuario);
        return;
    }

    // Mostrar el nombre secreto ya sorteado
    const resultadoSorteo = document.createElement('li');
    resultadoSorteo.textContent = `El nombre secreto sorteado es: ${nombreSecreto}`;
    resultado.appendChild(resultadoSorteo);
}

// Mostrar la lista inicial 
mostrarListaAmigos();
