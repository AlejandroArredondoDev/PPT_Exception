//VARIABLES DE TODOS LOS ELEMENTOS SUJETOS A MODIFICACION

const puntuacionUser = document.getElementById("USER_1643");
const puntuacionSmith = document.getElementById("AI_SMITH");
const seleccionRival = document.getElementById("seleccion_rival_img");

const botonPiedra = document.getElementById("Piedra");
const botonPapel = document.getElementById("Papel");
const botonTijera = document.getElementById("Tijera");

const seccionRivalInfo = document.querySelector(".rival")
const seccionBotones = document.querySelector(".botones")
const seccionInfo = document.querySelector(".info_game")

let puntosUser = 0;
let puntosSmith = 0;

const opcion = ["piedra", "papel", "tijera"];
const imagenesOpciones = {
    piedra: "/Imagenes/Piedra_rival.png",
    papel: "/Imagenes/Papel_rival.png",
    tijera: "/Imagenes/Tijeras_rival.png"
};

const imgWinPreload = new Image();
imgWinPreload.src = "/Imagenes/win_endgame.png"
imgWinPreload.classList.add("modo_final")

const imgLosePreload = new Image();
imgLosePreload.src = "/Imagenes/lose_endgame.png"
imgWinPreload.classList.add("modo_final")


let jugadaActualSmith = "";

function jugadaInicial (){
    const indiceAleatorio = Math.floor(Math.random()* opcion.length);
    jugadaActualSmith = opcion[indiceAleatorio];

    seleccionRival.src = imagenesOpciones[jugadaActualSmith];
}

jugadaInicial();

function jugar (eleccionUsuario){
    let usuarioGanaRonda = false;

    if (eleccionUsuario === "piedra" && jugadaActualSmith === "papel") {
        usuarioGanaRonda = true; 
    } else if (eleccionUsuario === "piedra" && jugadaActualSmith === "tijera") {
        usuarioGanaRonda = false;
    } else if (eleccionUsuario === "piedra" && jugadaActualSmith === "piedra") {
        usuarioGanaRonda = false; 

    } else if (eleccionUsuario === "papel" && jugadaActualSmith === "tijera") {
        usuarioGanaRonda = true; 
    } else if (eleccionUsuario === "papel" && jugadaActualSmith === "piedra") {
        usuarioGanaRonda = false; 
    } else if (eleccionUsuario === "papel" && jugadaActualSmith === "papel") {
        usuarioGanaRonda = false; 

    } else if (eleccionUsuario === "tijera" && jugadaActualSmith === "piedra") {
        usuarioGanaRonda = true; 
    } else if (eleccionUsuario === "tijera" && jugadaActualSmith === "papel") {
        usuarioGanaRonda = false; 
    } else if (eleccionUsuario === "tijera" && jugadaActualSmith === "tijera") {
        usuarioGanaRonda = false; 
    }
    

if (usuarioGanaRonda === true){   
    puntosUser++;
    } else if (usuarioGanaRonda === false) {
        puntosSmith++;
    }

puntuacionUser.innerHTML = `YOU<br> ${puntosUser} / 3`;
puntuacionSmith.innerHTML = `AI SMITH<br> ${puntosSmith} / 3`;
    

    if (puntosUser === 3) {
        seleccionRival.src = "/Imagenes/win_endgame.png";

        seccionRivalInfo.classList.add("oculto");
        seccionBotones.classList.add("oculto");
        seccionInfo.classList.add("oculto");

        seleccionRival.classList.add("modo_final")

        setTimeout(() => reiniciarJuego(), 8000);    


    } else if (puntosSmith === 3) {
        
        seleccionRival.src = "/Imagenes/lose_endgame.png";

        seccionRivalInfo.classList.add("oculto");
        seccionBotones.classList.add("oculto");
        seccionInfo.classList.add("oculto");

        seleccionRival.classList.add("modo_final")

        setTimeout(() => reiniciarJuego(), 8000);    
            
    } else {
        jugadaInicial();
    }
    };


function reiniciarJuego() {
    puntosUser = 0;
    puntosSmith = 0;
    puntuacionUser.innerHTML = `YOU<br> 0 / 3`;
    puntuacionSmith.innerHTML = `AI SMITH<br> 0 / 3`;
    
    seleccionRival.classList.remove("modo_final");
    seccionRivalInfo.classList.remove("oculto");
    seccionBotones.classList.remove("oculto");
    seccionInfo.classList.remove("oculto");

    jugadaInicial();
}

botonPiedra.addEventListener("click", function() {
    jugar("piedra");
});

botonPapel.addEventListener("click", function() {
    jugar("papel");
});

botonTijera.addEventListener("click", function() {
    jugar("tijera");
});