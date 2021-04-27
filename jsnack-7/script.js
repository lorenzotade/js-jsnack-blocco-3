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