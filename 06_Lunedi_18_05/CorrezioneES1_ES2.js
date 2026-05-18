// Input utente
const prompt = require("prompt-sync")();

// Variabili
let menu = "";
let extra1 = "";
let extra2 = "";

// Scelta menu
menu = prompt("Scegli un panino: hamburger, hotdog o pizza: ");

// Switch principale
switch(menu) {

    case "hamburger":

        console.log("Hai scelto Hamburger.");

        extra1 = prompt("Aggiungi un condimento: ");
        extra2 = prompt("Aggiungi un altro condimento: ");

        console.log("Ordine finale:");
        console.log("Hamburger con " + extra1 + " e " + extra2);

        break;

    case "hotdog":

        console.log("Hai scelto Hotdog.");

        extra1 = prompt("Aggiungi un condimento: ");
        extra2 = prompt("Aggiungi un altro condimento: ");

        console.log("Ordine finale:");
        console.log("Hotdog con " + extra1 + " e " + extra2);

        break;

    case "pizza":

        console.log("Hai scelto Pizza.");

        extra1 = prompt("Aggiungi un ingrediente: ");
        extra2 = prompt("Aggiungi un altro ingrediente: ");

        console.log("Ordine finale:");
        console.log("Pizza con " + extra1 + " e " + extra2);

        break;

    default:
        console.log("Scelta non valida.");
}

// ----------------------------------------------------------

// Input utetNe
const prompt = require("prompt-sync")();

// Variabili ruolo
let ruolo1 = "";
let ruolo2 = "";
let ruolo3 = "";

// Input
ruolo1 = prompt("Inserisci primo ruolo: ");
ruolo2 = prompt("Inserisci secondo ruolo: ");
ruolo3 = prompt("Inserisci terzo ruolo: ");


// Primo ruolo
switch(ruolo1) {

    case "player":
        console.log("PLAYER: accesso al gioco.");
        break;

    case "moderator":
        console.log("MODERATOR: gestione chat.");
        break;

    case "admin":
        console.log("ADMIN: controllo totale.");
        break;

    default:
        console.log("Ruolo non valido.");
}


// Secondo ruolo
switch(ruolo2) {

    case "player":
        console.log("PLAYER: accesso al gioco.");
        break;

    case "moderator":
        console.log("MODERATOR: gestione chat.");
        break;

    case "admin":
        console.log("ADMIN: controllo totale.");
        break;

    default:
        console.log("Ruolo non valido.");
}


// Terzo ruolo
switch(ruolo3) {

    case "player":
        console.log("PLAYER: accesso al gioco.");
        break;

    case "moderator":
        console.log("MODERATOR: gestione chat.");
        break;

    case "admin":
        console.log("ADMIN: controllo totale.");
        break;

    default:
        console.log("Ruolo non valido.");
}


// Controllo combinazioni con IF
if(
    (ruolo1 === "player" || ruolo2 === "player" || ruolo3 === "player")
    &&
    (ruolo1 === "moderator" || ruolo2 === "moderator" || ruolo3 === "moderator")
) {

    console.log("Hai sia PLAYER che MODERATOR.");

}

if(
    ruolo1 === "admin" ||
    ruolo2 === "admin" ||
    ruolo3 === "admin"
) {

    console.log("Hai privilegi ADMIN.");

}
