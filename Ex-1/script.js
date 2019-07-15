// 1 -  Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;



// Funzione con parametri di range e di numero di ripetizioni, per generare un numero random
function genNumRandom(max, min, repeat){
  var n = Math.floor(Math.random() * (max - min) + min);
  var temporanea = "";

  for (var i = 0; i < repeat; i++) {
    n = Math.floor(Math.random() * (max - min) + min);
    // console.log(n);
    temporanea += " " + n;

  }
  return temporanea;
}


// Un alert() espone le cifre da memorizzare, range da 1 a 100, numeri casuali generati : 5
alert("Ricorda queste cinque cifre almeno per 30 secondi: " + genNumRandom(1, 100, 5));
