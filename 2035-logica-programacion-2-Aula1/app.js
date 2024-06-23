/*let titulo = document.querySelector("h1");
titulo.innerHTML=("Juego del número");
let parrafo = document.querySelector('p');
parrafo.innerHTML=("Selecciona un número del 1 al 10");*/
let numeroRandom;
let intentos;
let arrayNumeros=[];
numMax=1000;
iniciar();
alert(numeroRandom);
function intentoDeUsuario(){
    let numeroUsuario=parseInt(document.getElementById("entradaUsuario").value);
    if(numeroRandom==numeroUsuario){
        ingresarTexto("p","Felicidades, acertaste en "+ intentos+ (intentos==1 ? " intento" : " intentos"));
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("intentar").setAttribute("disabled","true");
    } else if (numeroUsuario<numeroRandom){
        ingresarTexto("p","El número es mayor");
    }   else {
        ingresarTexto("p","El número es menor");
    }
    clearNumber();
    intentos++;
}
function resetGame(){
    iniciar();
    clearNumber();
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

function clearNumber(){
   document.getElementById("entradaUsuario").value='';
}

function ingresarTexto(header, texto){
    let textoFuncion=document.querySelector(header);
    textoFuncion.innerHTML=texto;
}
function iniciar(){
    ingresarTexto("h1","Juego de los números");
    ingresarTexto("p","Ingresa un número entre 1 y "+numMax);
    numeroRandom=obtenerNumeroRandom();
    intentos=1;
    document.getElementById("intentar").removeAttribute("disabled");
}


function obtenerNumeroRandom(){
    if(arrayNumeros.length<numMax){
        let num=Math.floor(Math.random()*numMax)+1;
        if(arrayNumeros.includes(num)){
            return obtenerNumeroRandom();
        } else {
            arrayNumeros.push(num);
            return num;
        }
    }
}
