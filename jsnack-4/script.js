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