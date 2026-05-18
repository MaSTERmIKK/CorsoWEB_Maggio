// =====================================
// ESERCIZIO ARRAY E CONDIZIONI
// =====================================

const prompt = require("prompt-sync")();


// Array principale
let numeri = [];

// Array numeri pari
let pari = [];

// Array numeri dispari
let dispari = [];


// Variabile input
let valore;


// =====================================
// INSERIMENTO NUMERI
// =====================================

// Continua finché l'utente non inserisce 0
while (true) {

    // Chiedo un numero
    valore = prompt("Inserisci un numero (0 per uscire)");

    // Controllo se il valore NON è numerico
    if (isNaN(valore)) {

        console.log("Valore non valido");

    } else {

        // Converto in numero
        valore = Number(valore);

        // Se inserisce 0 esco dal ciclo
        if (valore === 0) {
            break;
        }

        // Salvo il numero nell'array
        numeri.push(valore);
    }
}



// =====================================
// CONTROLLO ARRAY VUOTO
// =====================================

if (numeri.length === 0) {

    console.log("Nessun numero inserito");

} else {

    // =====================================
    // VARIABILI PER SOMMA, MAX E MIN
    // =====================================

    let somma = 0;

    // Imposto max e min al primo valore
    let massimo = numeri[0];
    let minimo = numeri[0];



    // =====================================
    // ANALISI ARRAY
    // =====================================

    for (let i = 0; i < numeri.length; i++) {

        // Numero corrente
        let numero = numeri[i];



        // -----------------------------
        // SOMMA
        // -----------------------------

        somma += numero;



        // -----------------------------
        // NUMERI PARI E DISPARI
        // -----------------------------

        if (numero % 2 === 0) {

            pari.push(numero);

        } else {

            dispari.push(numero);

        }



        // -----------------------------
        // MASSIMO
        // -----------------------------

        if (numero > massimo) {

            massimo = numero;

        }



        // -----------------------------
        // MINIMO
        // -----------------------------

        if (numero < minimo) {

            minimo = numero;

        }
    }



    // =====================================
    // OUTPUT FINALE
    // =====================================

    console.log("Numeri inseriti:");
    console.log(numeri);

    console.log("Numeri pari:");
    console.log(pari);

    console.log("Numeri dispari:");
    console.log(dispari);

    console.log("Somma totale:");
    console.log(somma);

    console.log("Valore massimo:");
    console.log(massimo);

    console.log("Valore minimo:");
    console.log(minimo);
}
