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
