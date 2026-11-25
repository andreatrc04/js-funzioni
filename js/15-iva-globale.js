// Traccia 15 · L'IVA che cambia
// La consegna è nel README, alla voce "15 · L'IVA che cambia".

// # Il programma di partenza: è già scritto. Leggilo e prevedi cosa stampa, prima di aprire la pagina.

const calcolaPrezzoFinale = (prezzoNetto, percentualeIva) => prezzoNetto + (prezzoNetto * percentualeIva) / 100;




// # La versione indipendente: modifica la funzione qui sopra, non scriverne una seconda con lo stesso nome.


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(calcolaPrezzoFinale(100, 22));
console.log(calcolaPrezzoFinale(100, 4));
console.log(calcolaPrezzoFinale(50, 10));
console.log(calcolaPrezzoFinale(80, 0));

