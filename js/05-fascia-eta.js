// Traccia 05 · La fascia d'età
// La consegna è nel README, alla voce "05 · La fascia d'età".

function trovaFasciaEta(eta) {
  if (eta < 0) {
    return "Età non valida"
  }
  if (eta <= 17) {
    return "Minorenne";
  }
  if (eta <= 35) {
    return "Giovane Adulto";
  }
  if (eta <= 60) {
    return "Adulto";
  }
  return "Senior";

}

let eta = parseInt(prompt("Dimmi età"));
alert(trovaFasciaEta(eta));
