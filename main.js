// Basket
// Il software deve generare casualmente le statistiche di gioco di
// 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti
// informazioni, facendo attenzione che il numero generato abbia
// senso:
// - Codice Giocatore Univoco (formato da 3 lettere
// maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per da 3 punti
// Una volta generato il “database”, il programma deve chiedere
// all’utente di inserire un Codice Giocatore e il programma
// restituisce le statistiche.



// var giocatore = {
//
//
//
//
//   'percentualeSuccessoTiriDuePunti':
//   'percentualeSuccessoTiriTrePunti':
//
// }


var giocatori = [];

for (var i = 0; i < 10; i++)
{
  var nuovoGiocatore = {
    'codiceGiocatoreUnivoco': makeid() + makeid2(),
    'numeroPunti': getRandomNumber(10, 40),
    'numeroRimbalzi': getRandomNumber(5, 20),
    'falli': getRandomNumber(5, 15),
    'percentualeSuccessoTiriDuePunti': getRandomNumber(70,80) + '%',
  }
  giocatori.push(nuovoGiocatore);
}
console.log(giocatori);
function getRandomNumber(min, max)
{
  var newRandomNumber = Math.floor(Math.random()*(max-min+1)+min);
  return newRandomNumber;
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < 3; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function makeid2() {
  var text = "";
  var possible = "0123456789";

  for (var i = 0; i < 3; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
