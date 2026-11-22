// Traccia 04 · Dal voto al giudizio
// La consegna è nel README, alla voce "04 · Dal voto al giudizio".

function trovaGiudizio(voto) {
  if (isNaN(voto) || voto < 1 || voto > 10) {
    return "Voto non valido";
  } else if (voto < 5) {
    return "Gravemente insufficiente";
  } else if (voto < 6) {
    return "Insufficiente";
  } else if (voto < 7) {
    return "Sufficiente";
  } else if (voto < 8) {
    return "Buono";
  }
  return "Ottimo";
}

let voto = parseInt(prompt("Dammi voto"));
alert(trovaGiudizio(voto));

