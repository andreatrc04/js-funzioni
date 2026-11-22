// Traccia 07 · I giorni del mese
// La consegna è nel README, alla voce "07 · I giorni del mese".

function contaGiorniDelMese(numeroMese) {
  let giornimesi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (numeroMese < 1 || numeroMese > 12) {
    return 0;
  }
  return giornimesi[numeroMese - 1];
}
let numeroMese = parseInt(prompt("Dammi numero mese"));
alert(contaGiorniDelMese(numeroMese));
