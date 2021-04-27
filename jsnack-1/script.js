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