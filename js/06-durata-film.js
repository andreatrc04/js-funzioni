// Traccia 06 · La durata del film
// La consegna è nel README, alla voce "06 · La durata del film".

function formattaDurata(minuti) {
  let ore = Math.floor(minuti / 60);
  let minutiRestanti = minuti % 60;
  if (ore === 0) {
    return minutiRestanti + " minuti";
  }
  if (minutiRestanti === 0) {
    if (ore === 1) {
      return ore + " ora"
    }
    return ore + " ore"
  }
  if (ore === 1) {
    return 1 + " ora e " + minutiRestanti + " minuti";
  }
  return ore + " ore e " + minutiRestanti + " minuti";
}

let minuti = parseInt(prompt("Dimmi durata"));
alert(formattaDurata(minuti));