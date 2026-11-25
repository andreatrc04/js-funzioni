// Traccia 13 · Un parametro solo
// La consegna è nel README, alla voce "13 · Un parametro solo".

//#1
const calcolaMancia = totaleConto => totaleConto * 10 / 100;
console.log(calcolaMancia(20));

//#2
const formattaPrezzo = (prezzo) => prezzo.toFixed(2) + " €"
console.log(formattaPrezzo(4.5));
console.log(formattaPrezzo(12));
console.log(formattaPrezzo(0.7));
console.log(formattaPrezzo(calcolaMancia(45)));

//#3
const verificaMaggiorenne = (eta) => eta >= 18;
console.log(verificaMaggiorenne(17));
console.log(verificaMaggiorenne(18));
console.log(verificaMaggiorenne(40));
