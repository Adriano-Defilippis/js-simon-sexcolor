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
    temporanea += n + " ";

  }
  return temporanea;
}





// Esecuzione del codice

// Memorizzo in una variabile la stringa di numeri random generati dal funzione;
var stringaRandom = genNumRandom(1, 100, 5);

// Spiltto in un array i valori
var arrayRandom = stringaRandom.split(" ");
// .pop() : Funzione di js per eliminare l'ultimo elemento di un array per eliminare lo spazio vuoto come elemento dell'array
arrayRandom.pop();

//  Un alert() espone le cifre da memorizzare, range da 1 a 100, numeri casuali generati : 5
alert("Ricorda queste cinque cifre almeno per 30 secondi: " + stringaRandom);




// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// genero una funzione di Timing Function anonima, per chiedere l'input dopo 30 secondi
setTimeout(function(){

  var strIndovinate;
  var input;
  var arrayUser = [];
  arrayRandom;


  console.log("Arrai di nemeri random ", arrayRandom);



  // Genero un Array tramite funzione e lo salvo in una variabile che contiene input utente, tramite una funzione, 5 è il numero di volte che il prompt appare
  for (var i = 0; i < 5; i++) {
    input = prompt("inserisci un numero alla volta e clicca su ok per inserire un'altro numero");
    arrayUser.push(input);
  }
  console.log(arrayUser);


  strIndovinate = "";
  var contatore = 0;


  // Attraverso l'array per confronatarli
  for (var i = 0; i < arrayUser.length; i++) {

    if (arrayRandom.includes(arrayUser[i])) {

      strIndovinate += " " +  arrayUser[i];
      contatore ++;
    }

  }
  console.log("Hai indovinato ", + contatore + " volte, i numeri indovinati sono: ", strIndovinate);

}, 5000);
