// Bonus 1 · Febbraio bisestile
// La consegna è nel README, alla voce "Bonus 1 · Febbraio bisestile".

function verificaAnnoBisestile(anno) {
  if ((anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0) {
    return true;
  }
  return false
}

function contaGiorniDelMese(numeroMese, anno) {
  let giornimesi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (numeroMese < 1 || numeroMese > 12) {
    return 0;
  }
  if (numeroMese == 2 && verificaAnnoBisestile(anno)) {
    return 29;
  }
  return giornimesi[numeroMese - 1];
}
let numeroMese = parseInt(prompt("Dammi numero mese"));
let anno = parseInt(prompt("Dammi anno"));
alert(contaGiorniDelMese(numeroMese, anno));
