// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");

    // Validaciones
    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }
    if (amigos.length >= 3) {
        alert("El máximo de amigos permitidos es 3.");
        return;
    }

    // Agregar al arreglo
    amigos.push(nombre);

    // Mostrar en la lista
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    // Limpiar input
    input.value = "";
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos 2 amigos para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; // limpiar resultados previos

    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigos[indice]}`;
    resultado.appendChild(li);
}
