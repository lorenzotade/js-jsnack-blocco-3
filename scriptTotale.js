/* JSNACK-1 */

// creo array e lo popolo di zucchine
var arrZucchine = [
  {
    varietà: 'bella',
    peso: 1,
    lunghezza: 12
  },
  {
    varietà: 'lunga',
    peso: 1.2,
    lunghezza: 32
  },
  {
    varietà: 'pesante',
    peso: 4,
    lunghezza: 14
  },
  {
    varietà: 'gigante',
    peso: 3.2,
    lunghezza: 23
  },
  {
    varietà: 'verde',
    peso: .8,
    lunghezza: 22
  },
  {
    varietà: 'bella',
    peso: 1.4,
    lunghezza: 22
  },
  {
    varietà: 'gialla',
    peso: 1.8,
    lunghezza: 16
  },
  {
    varietà: 'oro',
    peso: 1.9,
    lunghezza: 13
  },
  {
    varietà: 'argento',
    peso: 2.3,
    lunghezza: 18
  },
  {
    varietà: 'bella',
    peso: 2.6,
    lunghezza: 17
  }
];

// inizializzo la variabile peso totale
var pesoTot = 0;

// con ciclo for..of sommo i valori di zucc.peso
for (var zucc of arrZucchine) {
  pesoTot += zucc['peso'];
}
// mostro il totale a video
console.log('Peso totale: ' + pesoTot.toFixed(2));


/* JSNACK-2 */

// creo un array e lo popolo di zucchine
var arrZucchine = [
  {
    varietà: 'bella',
    peso: 1,
    lunghezza: 12
  },
  {
    varietà: 'lunga',
    peso: 1.2,
    lunghezza: 8
  },
  {
    varietà: 'pesante',
    peso: 4,
    lunghezza: 14
  },
  {
    varietà: 'gigante',
    peso: 3.2,
    lunghezza: 23
  },
  {
    varietà: 'verde',
    peso: .8,
    lunghezza: 6
  },
  {
    varietà: 'bella',
    peso: 1.4,
    lunghezza: 22
  },
  {
    varietà: 'gialla',
    peso: 1.8,
    lunghezza: 16
  },
  {
    varietà: 'oro',
    peso: 1.9,
    lunghezza: 13
  },
  {
    varietà: 'argento',
    peso: 2.3,
    lunghezza: 18
  },
  {
    varietà: 'bella',
    peso: 2.6,
    lunghezza: 9
  }
];
// inizializzo i due array vuoti
var arrMeno = [];
var arrPiu = [];
// con un ciclo for..of sorto le zucchine in grandi e piccole in base al 
// valore di zucchina.lunghezza
/* 
  SOLUZIONE CORTA: DUE VARIABILI PESO E MENTRE PUSHA CONTROLLA E SOMMA I PESI
*/
for (zucchina of arrZucchine) {
  if (zucchina.lunghezza <= 15) {
    arrMeno.push(zucchina);
  } else {
    arrPiu.push(zucchina);
  }
}

// inizializzo la variabile peso totale
var pesoTot = 0;

// con ciclo for..of sommo i valori di zucc.peso nell'arrMeno
for (var zucc of arrMeno) {
  pesoTot += zucc.peso;
}
// stampo a video il totale
console.log('Il peso totale delle zucchine piccole è: ' + pesoTot + 'kg');

// con ciclo for..of sommo i valori di zucc.peso nell'arrPiu
for (var zucc of arrPiu) {
  pesoTot += zucc.peso;
}
// stampo a video il totale
console.log('Il peso totale delle zucchine grandi è: ' + pesoTot + 'kg');


/* JSNACK-4 */

// inizializzo tre array: due contenenti i valori e uno vuoto per il risultato
var arr1 = [1, 2, 3, 4, 5, 6, 7];
var arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'a','b'];
var arrTot = [];

// inizializzo una variabile contatore/indice
var i = 0;
// mentre i valori presenti nei due array sono diversi da undefined,
// continua a pushare i valori alternati e aumenta il contatore
while (arr1[i] != undefined && arr2[i] != undefined) {
  arrTot.push(arr1[i]);
  arrTot.push(arr2[i]);
  i++;
}
// stampo a video l'array risultato
console.log(arrTot);


/* JSNACK 5 */

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


/* JSNACK 6 */

/* 1- creo un array e lo riempio di elementi */
/* 2- creo una funzione che prenda come parametro l'array,
  un numero 'a' e un numero 'b' più grande, ma grande al
  massimo quanto la lunghezza dell'array */
/* 3- la funzione mi restituisce un nuovo array con i valori
  dell'array passato compresi tra 'a' e 'b' */

// dichiaro array di numeri da 1 a 10
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(splitArr(arr, 4, 8));
  
/* FUNCTION */
  
// dichiaro array risultato e per i valori arr[i]
// compresi tra (a-1) e (b-1) ((forma umana))
// li pusho nell'arrResult
function splitArr(arr, a, b) {
  var arrResult = [];
  for (var i = (a-1); i < arr[b-1]; i++) {
    arrResult.push(arr[i]);
  }
  return arrResult;
}


/* JSNACK 7 */

/* 1- creo due elementi dai valori diversi */
/* 2- aggiungo elementi casuali a quello che ne ha di meno 
  fino a quando non hanno lo stesso numero di elementi*/

// creo i due array con lunghezze diverse
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = [1, 2, 3];

// stampo a video gli array prima del ciclo
console.log('Array n. 1: '+ arr1);
console.log('Array n. 2: '+ arr2);
console.log('===============')

// mentre gli array hanno lunghezze diverse, pusho
// in quello più corto tanti numeri random da 1 a 100
while (arr1.length != arr2.length) {
  if (arr1.length < arr2.length) {
    arr1.push(Math.floor(Math.random() * 100) + 1);
  } else {
    arr2.push(Math.floor(Math.random() * 100) + 1);
  }
}
// stampo a video gli array dopo il ciclo
console.log('Array n. 1: '+ arr1);
console.log('Array n. 2: '+ arr2);