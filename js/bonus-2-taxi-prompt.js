// Bonus 2 · Il programma del taxi
// La consegna è nel README, alla voce "Bonus 2 · Il programma del taxi".

function verificaOraNotturna(ora) {
  if (ora <= 5) {
    return true;
  }
  return false;
}

function verificaOraValida(ora) {
  if (isNaN(ora) || ora < 0 || ora > 23) {
    return false
  }
  return true
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
if (isNaN(prezzoBase) || prezzoBase <= 0) {
  alert("Prezzo non valido");
} else if (!verificaOraValida(oraPartenza) || !verificaOraValida(oraArrivo)) {
  alert("Orario non valido: scrivi un'ora da 0 a 23");
} else {
  alert("Totale corsa: " + calcolaTotaleCorsa(prezzoBase, oraPartenza, oraArrivo) + " €");
}
