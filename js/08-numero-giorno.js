// Traccia 08 · Dal nome al numero del giorno
// La consegna è nel README, alla voce "08 · Dal nome al numero del giorno".

function trovaNumeroGiorno(giorno) {
  let nomeGiorni = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"]
  for (let i = 0; i < 7; i++) {
    if (nomeGiorni[i] === giorno) {
      return i + 1;
    }
  }
  return 0;
}

let giorno = prompt("Dammi nome giorno");
alert(trovaNumeroGiorno(giorno));
