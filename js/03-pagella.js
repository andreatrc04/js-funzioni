// Traccia 03 · Lo scritto vale doppio
// La consegna è nel README, alla voce "03 · Lo scritto vale doppio".

function calcolaMediaPonderata(votoScritto, votoOrale) {
  let totale = (votoScritto * 2) + votoOrale;
  let mediaPonderata = totale / 3;
  return mediaPonderata.toFixed(1);
}

let votoScritto = parseInt(prompt("Dammi voto scritto"));
let votoOrale = parseInt(prompt("Dammi voto orale"));
alert(calcolaMediaPonderata(votoScritto, votoOrale));
