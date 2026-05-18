// ==============================
// ESEMPIO CONDIZIONI E CICLI JS
// ==============================


// ------------------------------
// ESEMPIO 1: IF / ELSE
// ------------------------------

// Variabile numerica
let eta = 20;

// Controllo una condizione
if (eta >= 18) {
    console.log("Sei maggiorenne");
} else {
    console.log("Sei minorenne");
}


// ------------------------------
// ESEMPIO 2: IF / ELSE IF / ELSE
// ------------------------------

// Variabile voto
let voto = 7;

// Controllo più casi
if (voto >= 9) {
    console.log("Ottimo voto");
} else if (voto >= 6) {
    console.log("Voto sufficiente");
} else {
    console.log("Voto insufficiente");
}


// ------------------------------
// ESEMPIO 3: SWITCH
// ------------------------------

// Variabile giorno
let giorno = "lunedì";

// Controllo il valore della variabile
switch (giorno) {

    case "lunedì":
        console.log("Inizio settimana");
        break;

    case "sabato":
    case "domenica":
        console.log("Weekend");
        break;

    default:
        console.log("Giorno normale");
}


// ------------------------------
// ESEMPIO 4: CICLO FOR
// ------------------------------

// Ripeto il codice 5 volte
for (let i = 1; i <= 5; i++) {

    console.log("Numero: " + i);

}


// ------------------------------
// ESEMPIO 5: CICLO WHILE
// ------------------------------

// Variabile contatore
let numero = 1;

// Continua finché la condizione è vera
while (numero <= 3) {

    console.log("While numero: " + numero);

    numero++;
}


// ------------------------------
// ESEMPIO 6: CICLO SU ARRAY
// ------------------------------

// Creo un array
let animali = ["Cane", "Gatto", "Leone"];

// Leggo tutti gli elementi dell'array
for (let i = 0; i < animali.length; i++) {

    console.log(animali[i]);

}
