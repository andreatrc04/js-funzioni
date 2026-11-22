// Traccia 10 · Il taxi di notte
// La consegna è nel README, alla voce "10 · Il taxi di notte".

function verificaOraNotturna(ora) {
  if (ora <= 5) {
    return true;
  }
  return false;
}

function calcolaTotaleCorsa(prezzoBase, oraPartenza, oraArrivo) {
  if (verificaOraNotturna(oraPartenza) || verificaOraNotturna(oraArrivo)) {
    let totaleCorsa = prezzoBase + 5;
    return totaleCorsa;
  }
  return prezzoBase;
}

let prezzoBase = parseInt(prompt("Dammi prezzo Base"));
let oraPartenza = parseInt(prompt("Dimmi ora di partenza"));
let oraArrivo = parseInt(prompt("Dimmi ora di arrivo"));
alert(calcolaTotaleCorsa(prezzoBase, oraPartenza, oraArrivo,));

