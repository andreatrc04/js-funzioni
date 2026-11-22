// Traccia 09 · Quanto manca alla pensione
// La consegna è nel README, alla voce "09 · Quanto manca alla pensione".

function trovaEtaPensione(tipoLavoro) {
  if (tipoLavoro === "ordinario") {
    return 67;
  }
  return 62;
}

function calcolaAnniAllaPensione(annoNascita, annoCorrente, tipoLavoro) {
  let eta = annoCorrente - annoNascita;
  let anniAllaPensione = trovaEtaPensione(tipoLavoro) - eta;
  if (anniAllaPensione < 0) {
    return 0;
  }
  return anniAllaPensione;
}

const annoCorrente = parseInt(prompt("Dammi anno corrente"));
let annoNascita = parseInt(prompt("Dammi anno di nascita"));
let tipoLavoro = prompt("dimmi tipo di lavoro");
alert(calcolaAnniAllaPensione(annoNascita, annoCorrente, tipoLavoro));

