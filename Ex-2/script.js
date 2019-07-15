// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“,
// il colore del nome deve essere azzurro o rosa a seconda del sesso inserito;


//Memorizzo l'elemento nome in una variabile
var element = document.getElementById("name");
element.innerHTML = nome ;

console.log("sesso: ",sesso);
console.log("nome: ", nome);


// Cambio lo style color a seconda se lo user ha digitato maschi o femmina alla richiesta del prompt
if (sesso === "maschio") {
  element.style.color = "blue";
}else if (sesso === "femmina"){
  element.style.color = "pink";
}
