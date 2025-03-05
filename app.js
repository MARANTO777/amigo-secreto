// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables

let nombreSecreto = generarNombreSecreto

function asignarTextoElemento(elemento,texto){
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML =texto;
}
let nombreAmigos = [Juan, Diego, Mario, Elias,Hugo];


function sortearAmigo() {
   let nombreDeAmigo = document.getElementById('nombreAmigo');
    console.log(nombreDeAmigo === nombreSecreto);
   if (nombreDeAmigo === nombreSecreto){
      asignarTextoElemento('p', 'Acertaste el nombre');
      }
     if (nombreDeAmigo === "") {
      alert("Ingrese un nombre válido.");
      return;
      }
}
   
  function limpiarCaja() {
   document.querySelector('#nombreAmigo').value = " ";
  }

function generarNombreSecreto() {
   let nombreGenerado = Math.floor(Math.random() * nombreAmigos.length);
   //Si el nombre generado esta en la lista
   if (nombreAmigos.includes(nombreGenerado)) {
      return generarNombreSecreto();
   }  else {
      nombreAmigos.push(nombreGenerado);
      return nombreGenerado;
   }
   if (nombreAmigos.length === 0) {
      alert("No hay nombres en la lista.")
   }

   }

function agregarAmigo() {
   //limpiar caja
   limpiarCaja;
   //indicar mensaje de intervalos de nombres
   //Gnerear el nomre aleatorio
   nombreSecreto = generarNombreSecreto
   //Deshabilitar el botón de nuevo juego}


}