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

for (var i = 0; i < 100; i++)
{
  var nuovoGiocatore = {
    'codiceGiocatoreUnivoco': 'AAA111',
    'numeroPunti': getRandomNumber(10, 40),
    'numeroRimbalzi': getRandomNumber(5, 20),
    'falli': getRandomNumber(5, 15),
    'percentualeSuccessoTiriDuePunti': getRandomNumber(70, 80) + '%',
    'percentualeSuccessoTiriTrePunti': getRandomNumber(20, 40) + '%'
  }
  giocatori.push(nuovoGiocatore);
}
console.log(giocatori);
function getRandomNumber(min, max)
{
  var newRandomNumber = Math.floor(Math.random()*(max-min+1)+min);
  return newRandomNumber;
}

function randomUnivoco() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < 3; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;

}
function randomUnivoco2() {
  var text = "";
  var possible = "0123456789";

  for (var i = 0; i < 3; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;

}
var contatore = 0;
var trovato = false;

while (trovato == false && contatore < giocatori.length)
{
  var richiestaCodice = prompt('inserisci il codice');

  for (i = 0; i < giocatori.length; i++)
  {
    var codicegiocatore = giocatori[i];
  }

  if (richiestaCodice == codicegiocatore.codiceGiocatoreUnivoco)
  {
    trovato = true;
    document.writeln(nuovoGiocatore);
  }
  contatore++;
}
console.log(codicegiocatore.codiceGiocatoreUnivoco);
