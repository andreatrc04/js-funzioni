// Traccia 12 · Una riga sola
// La consegna è nel README, alla voce "12 · Una riga sola".

//#1
const calcolaPrezzoConIva = (prezzoNetto) => prezzoNetto + (prezzoNetto * 22) / 100;
console.log(calcolaPrezzoConIva(10));
console.log(calcolaPrezzoConIva(100));
console.log(calcolaPrezzoConIva(0));

//#2
const calcolaAreaRettangolo = (base, altezza) => base * altezza;
console.log(calcolaAreaRettangolo(4, 5));
console.log(calcolaAreaRettangolo(2.5, 2));

//#3
const verificaNumeroPari = (numero) => numero % 2 === 0;
console.log(verificaNumeroPari(4));
console.log(verificaNumeroPari(7));
console.log(verificaNumeroPari(0));

//#4 prova
/*const calcolaPrezzoConIva = (prezzoNetto) => {prezzoNetto + (prezzoNetto * 22) / 100};
console.log(calcolaPrezzoConIva(10));
console.log(calcolaPrezzoConIva(100));
console.log(calcolaPrezzoConIva(0));
*/

//#4 reale
const convertiCelsiusInFahrenheit = (gradiCelsius) => (((gradiCelsius * 9) / 5) + 32);
console.log(convertiCelsiusInFahrenheit(0));
console.log(convertiCelsiusInFahrenheit(100));
console.log(convertiCelsiusInFahrenheit(20));
console.log(convertiCelsiusInFahrenheit(-40));



