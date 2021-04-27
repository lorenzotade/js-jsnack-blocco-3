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