var nome = prompt("Quale e' il tuo nome?");
var cognome = prompt("Quale e' il tuo cognome?");
var colore = prompt("Quale e' il tuo colore preferito?");

document.getElementById("testo1").innerHTML="Ciao " + nome + " " + cognome + "! La tua password generata è: ";
document.getElementById("testo2").innerHTML= nome + cognome + colore + "19";
