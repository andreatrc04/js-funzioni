// Traccia 02 · Il cambio in aeroporto
// La consegna è nel README, alla voce "02 · Il cambio in aeroporto".

function calcolaDollariRicevuti(importoInEuro, tassoDiCommissione, commissione) {
  if (importoInEuro <= commissione) {
    return 0;
  }
  let cambioInDollari = ((importoInEuro - commissione) * tassoDiCommissione);
  return cambioInDollari.toFixed(2) + " $";
}
let importoInEuro = parseInt(prompt("Dammi importo in euro"));
let commissione = parseInt(prompt("Dammi commissione"));
let tassoDiCommissione = parseFloat(prompt("Dammi tasso di commissione"));
console.log(calcolaDollariRicevuti(importoInEuro, tassoDiCommissione, commissione))
