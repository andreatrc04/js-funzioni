// Traccia 01 · Lo stato della spedizione
// La consegna è nel README, alla voce "01 · Lo stato della spedizione".

function trovaStatoSpedizione(stato) {
  if (stato === 1) {
    return "In elaborazione";
  } else if (stato === 2) {
    return "Spedito";
  } else if (stato === 3) {
    return "Consegnato";
  }
  return "Stato sconosciuto";
}


let stato = prompt("dammi codice spedizione");
stato = parseInt(stato);
alert(trovaStatoSpedizione(stato));

