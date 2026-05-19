// =====================================
// ESEMPI DI FUNZIONI IN JAVASCRIPT
// =====================================


// =====================================
// FUNZIONE SEMPLICE
// =====================================

// Creo una funzione
function saluta() {

    console.log("Ciao mondo");

}


// Chiamo la funzione
saluta();



// =====================================
// FUNZIONE CON PARAMETRI
// =====================================

// Funzione con variabili in ingresso
function salutaPersona(nome) {

    console.log("Ciao " + nome);

}


// Chiamo la funzione passando un valore
salutaPersona("Mirko");
salutaPersona("Luca");



// =====================================
// FUNZIONE CON PIÙ PARAMETRI
// =====================================

function somma(numero1, numero2) {

    let risultato = numero1 + numero2;

    console.log("Somma: " + risultato);

}


// Uso della funzione
somma(10, 20);
somma(5, 7);



// =====================================
// FUNZIONE CON RETURN
// =====================================

// La funzione restituisce un valore
function moltiplica(a, b) {

    return a * b;

}


// Salvo il valore restituito
let risultatoFinale = moltiplica(4, 5);

console.log(risultatoFinale);



// =====================================
// FUNZIONE CON CONDIZIONE
// =====================================

function controllaEta(eta) {

    // Controllo età
    if (eta >= 18) {

        console.log("Maggiorenne");

    } else {

        console.log("Minorenne");

    }

}


// Uso funzione
controllaEta(20);
controllaEta(15);



// =====================================
// FUNZIONE CON CICLO
// =====================================

function stampaNumeri() {

    // Stampo numeri da 1 a 5
    for (let i = 1; i <= 5; i++) {

        console.log(i);

    }

}


// Chiamo funzione
stampaNumeri();



// =====================================
// FUNZIONE CHE LAVORA SU ARRAY
// =====================================

function stampaArray(array) {

    // Leggo tutti gli elementi
    for (let i = 0; i < array.length; i++) {

        console.log(array[i]);

    }

}


// Creo array
let animali = ["Cane", "Gatto", "Leone"];


// Uso funzione
stampaArray(animali);



// =====================================
// FUNZIONE ARROW
// =====================================

// Versione compatta di una funzione
const salutoArrow = () => {

    console.log("Funzione arrow");

};


// Chiamo la funzione
salutoArrow();



// =====================================
// FUNZIONE INPUT NUMERICO
// =====================================

function numeroValido(numero) {

    // Controllo se è numerico
    if (isNaN(numero)) {

        console.log("Non è un numero");

    } else {

        console.log("Numero valido");

    }

}


// Uso funzione
numeroValido(10);
numeroValido("ciao");
