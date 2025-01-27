// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Evento para presionar Enter en el input
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function agregarAmigo (){
    let nombreAmigoSecreto = document.getElementById('amigo').value;
    if (nombreAmigoSecreto == ""){
        alert("Por favor, Inserte un nombre")
    }else{
        amigos.push(nombreAmigoSecreto);
        limpiarCaja();
        mostrarAmigos();
    }
    console.log(amigos);
    return;
    
}

function limpiarCaja(){
    document.querySelector("#amigo").value = "";
    return;
}

function mostrarAmigos(){
    // Paso 1: Obtener la lista (la pizarra)
    let lista = document.getElementById("listaAmigos");
    // Paso 2: Limpiar la lista existente (borrar la pizarra)
    lista.innerHTML = "";
    // Paso 3: Recorrer el arreglo de amigos (sacar las notas del cajón)
    for (let i = 0; i < amigos.length; i++){
        let amigo = amigos[i];
        // Paso 4: Agregar cada nombre como un elemento <li> (escribirlo en la pizarra)
        lista.innerHTML +=`<li>${amigo}</li>`;
    }
    return;
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("No hay amigos para sortear. Agrega al menos un amigo")
    }else{
        let ganador = amigos[Math.floor(Math.random() * amigos.length)];
        //para saber que indice salio
        //let indiceGanador = Math.floor(Math.random() * amigos.length);
        //console.log(indiceGanador);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = (`El ganador es: ${ganador}`);
        console.log(ganador);
        return;
    }
}