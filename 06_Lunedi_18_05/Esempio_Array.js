// =====================================
// ARRAY SEMPLICI E MISTI IN JAVASCRIPT
// =====================================



// =====================================
// ARRAY NUMERICO
// =====================================

// Creo un array vuoto
let numeri = [];


// -------------------------------------
// AGGIUNTA ELEMENTI
// -------------------------------------

numeri.push(10);
numeri.push(20);
numeri.push(30);


// -------------------------------------
// STAMPA ARRAY
// -------------------------------------

console.log("Array numeri:");
console.log(numeri);


// -------------------------------------
// ACCESSO AGLI ELEMENTI
// -------------------------------------

console.log("Primo elemento: " + numeri[0]);
console.log("Secondo elemento: " + numeri[1]);
console.log("Terzo elemento: " + numeri[2]);


// -------------------------------------
// MODIFICA ELEMENTI
// -------------------------------------

numeri[1] = 50;

console.log("Array modificato:");
console.log(numeri);


// -------------------------------------
// CICLO FOR
// -------------------------------------

console.log("Ciclo array numeri:");

for (let i = 0; i < numeri.length; i++) {

    console.log(numeri[i]);

}



// =====================================
// ARRAY DI STRINGHE
// =====================================

// Creo un array già pieno
let animali = ["Cane", "Gatto", "Leone"];


// -------------------------------------
// STAMPA ARRAY
// -------------------------------------

console.log("Array animali:");
console.log(animali);


// -------------------------------------
// AGGIUNTA ELEMENTO
// -------------------------------------

animali.push("Tigre");

console.log(animali);



// =====================================
// ARRAY MISTO
// =====================================

// Un array può contenere tipi diversi
let dati = [
    "Mirko",
    25,
    true,
    18.5
];


// -------------------------------------
// STAMPA ARRAY
// -------------------------------------

console.log("Array misto:");
console.log(dati);


// -------------------------------------
// ACCESSO AGLI ELEMENTI
// -------------------------------------

console.log(dati[0]);
console.log(dati[1]);
console.log(dati[2]);
console.log(dati[3]);


// -------------------------------------
// AGGIUNTA NUOVI ELEMENTI
// -------------------------------------

dati.push("Studente");
dati.push(false);

console.log(dati);


// -------------------------------------
// MODIFICA ELEMENTI
// -------------------------------------

dati[1] = 30;

console.log(dati);


// -------------------------------------
// CICLO FOR SU ARRAY MISTO
// -------------------------------------

console.log("Ciclo array misto:");

for (let i = 0; i < dati.length; i++) {

    console.log(dati[i]);

}


// -------------------------------------
// CONTROLLO IF
// -------------------------------------

if (typeof dati[0] === "string") {

    console.log("Il primo elemento è una stringa");

}



// =====================================
// ALTRO ARRAY MISTO
// =====================================

let utente = [
    "Luca",
    22,
    true,
    "Torino"
];

console.log("Array utente:");
console.log(utente);
