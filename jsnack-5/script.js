/* 1- creo un array team per i giocatori */
/* 2- scrivo una funzione che prenda come parametri un targt e 
  una quantità */ 
/* 3- all'interno della funzione un ciclo for che gira tante volte
  quante la quantità decisa, mi crea un oggetto player con
  i valori generati random e li pusha nell'array */

// inizializzo array vuoto
var team = [];

// chiamo la funzione per generare e pushare i giocatori
getPlayer(10);
// mostro a video la squadra
console.log(team);

/* FUNZIONI */

// funzione per generare tanti giocatori quanti il limite
function getPlayer(limit) {
  for (var i = 0; i < limit; i++) {
    var player = {
      id: idGenerator(),
      points: randomNumberGenerator(50),
      success: randomNumberGenerator(100)
    }
    team.push(player);
  }
}

// funzione per generare numeri randomi da 0 a max
function randomNumberGenerator(max) {
  return Math.floor(Math.random() * max)
}

// funzione per generare un id random costituito da 3 lettere
// maiuscole intervallate da 3 numeri
function idGenerator() {
  var id = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for ( var i = 0; i < 3; i++ ) {
    id.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    id.push(Math.floor(Math.random() * 10));
  }
  return id.join('');
}