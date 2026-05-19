// Importo prompt-sync
const prompt = require("prompt-sync")();



// =====================================
// ARRAY PRINCIPALE
// =====================================

let catalogo = [];



// =====================================
// FUNZIONE AGGIUNGI PRODOTTO
// =====================================

function aggiungiProdotto() {

    let nome = prompt("Nome prodotto: ");

    let prezzo = Number(prompt("Prezzo prodotto: "));

    let quantita = Number(prompt("Quantità prodotto: "));



    // Controllo dati
    if (
        nome.trim() === "" ||
        isNaN(prezzo) ||
        isNaN(quantita)
    ) {

        console.log("Dati non validi");

        return;
    }



    // Creo oggetto prodotto
    let prodotto = {

        nome: nome,
        prezzo: prezzo,
        quantita: quantita

    };



    // Inserisco nel catalogo
    catalogo.push(prodotto);

    console.log("Prodotto aggiunto");
}



// =====================================
// FUNZIONE VALORE TOTALE
// =====================================

function calcolaTotale() {

    let totale = 0;

    for (let i = 0; i < catalogo.length; i++) {

        totale += catalogo[i].prezzo * catalogo[i].quantita;

    }

    return totale;
}



// =====================================
// FUNZIONE PRODOTTO PIÙ COSTOSO
// =====================================

function prodottoMassimo() {

    let massimo = catalogo[0];

    for (let i = 0; i < catalogo.length; i++) {

        if (catalogo[i].prezzo > massimo.prezzo) {

            massimo = catalogo[i];

        }

    }

    return massimo;
}



// =====================================
// FUNZIONE PRODOTTO PIÙ ECONOMICO
// =====================================

function prodottoMinimo() {

    let minimo = catalogo[0];

    for (let i = 0; i < catalogo.length; i++) {

        if (catalogo[i].prezzo < minimo.prezzo) {

            minimo = catalogo[i];

        }

    }

    return minimo;
}



// =====================================
// FUNZIONE PRODOTTI DISPONIBILI
// =====================================

function prodottiDisponibili() {

    let disponibili = [];

    for (let i = 0; i < catalogo.length; i++) {

        if (catalogo[i].quantita > 0) {

            catalogo[i].disponibile = true;

            disponibili.push(catalogo[i]);

        } else {

            catalogo[i].disponibile = false;

        }

    }

    return disponibili;
}



// =====================================
// FUNZIONE ARRAY NOMI
// =====================================

function soloNomi() {

    let nomi = [];

    for (let i = 0; i < catalogo.length; i++) {

        nomi.push(catalogo[i].nome);

    }

    return nomi;
}



// =====================================
// MENU PRINCIPALE
// =====================================

let uscita = false;



while (uscita === false) {

    console.log("\n===== MENU =====");

    console.log("1 - Aggiungi prodotto");
    console.log("2 - Mostra catalogo");
    console.log("3 - Valore totale magazzino");
    console.log("4 - Prodotto più costoso");
    console.log("5 - Prodotto più economico");
    console.log("6 - Prodotti disponibili");
    console.log("7 - Array solo nomi");
    console.log("Scrivi ESCI per terminare");



    let scelta = prompt("Scelta: ");




    // =====================================
    // USCITA
    // =====================================

    if (scelta.toLowerCase() === "esci") {

        uscita = true;

        console.log("Programma terminato");



    // =====================================
    // AGGIUNTA PRODOTTO
    // =====================================

    } else if (scelta === "1") {

        aggiungiProdotto();



    // =====================================
    // MOSTRA CATALOGO
    // =====================================

    } else if (scelta === "2") {

        console.log(catalogo);



    // =====================================
    // VALORE TOTALE
    // =====================================

    } else if (scelta === "3") {

        console.log(calcolaTotale());



    // =====================================
    // PRODOTTO MASSIMO
    // =====================================

    } else if (scelta === "4") {

        if (catalogo.length === 0) {

            console.log("Catalogo vuoto");

        } else {

            console.log(prodottoMassimo());

        }



    // =====================================
    // PRODOTTO MINIMO
    // =====================================

    } else if (scelta === "5") {

        if (catalogo.length === 0) {

            console.log("Catalogo vuoto");

        } else {

            console.log(prodottoMinimo());

        }



    // =====================================
    // DISPONIBILI
    // =====================================

    } else if (scelta === "6") {

        console.log(prodottiDisponibili());



    // =====================================
    // SOLO NOMI
    // =====================================

    } else if (scelta === "7") {

        console.log(soloNomi());



    // =====================================
    // SCELTA NON VALIDA
    // =====================================

    } else {

        console.log("Scelta non valida");

    }

}
