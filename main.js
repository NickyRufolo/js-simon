// Ciao ragazzi,
// Esercizio di oggi: Simon Says
// nome repo: js-simon
// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// creare un array vuoto
// creare una funzione per generare num random
// ciclo per generare 5 numeri casuali nell'array
// pushamo nell'array vuoto
// stampiamo a pagina i numeri generati
// nascondo i numeri visualizzati con il css dopo tot secondi
// far comparire 5 prompt dopo tot secondi

//2 idee: 
// idea 1: salvare in un altro array i numeri scritti dall'utente nei prompt e controllare quali e quanti numeri coincidano con l'array dei numeri random
// idea 2: controllare ogni numero che viene scritto dall'utente è incluso nell'array dei num random

//array vuoto
let arrayrandom = [];
let arrayPrompt = []; // dove salvo i numeri prompt

//funzione per creare num random
function randomNumber(){
    let randomNum = Math.floor((Math.random() * 100) + 1);
    return randomNum; 
}
console.log(randomNumber());

//funzione per generare 5 numeri casuali nell'array
function generate5Loops(){
    let x = 0; //variabile contatore x il ciclo
    let num; //variabile soldato bottaevia
    while (x < 5 ){ //svolgi il ciclo finche arriva a 5 botte
        num = randomNumber(); //svolge la funzione di generare il numero x evitare la duplicazione
        if (!arrayrandom.includes(num)) { //se l'arrayrandom non include num generato con la funzione randomNumber va avanti e continua sotto
            x++; //vai avanti con il ciclo +1
            arrayrandom.push(num); //pusha il numero generato dentro l'array vuoto li pusho il (num) 
        }
    }
    return arrayrandom;
}

function printFor5Seconds(){
    document.getElementById(`print`).innerText = generate5Loops(); // ti ritorna i 5 numeri random
    setTimeout(nascondiNumeri, 2000); //funzione + millesecondi
    setTimeout(whatNumberIs, 5000);  //funzione + millesecondi

}
printFor5Seconds() //sempre invocare la funzione 

function nascondiNumeri(){
document.getElementById(`print`).classList.add(`d-none`); //aggiungo classe none per css toglirlo dopo 5 secondi
}

//funzione che numero è ?
function whatNumberIs(){
    let promptNum; //scopavariabile soldato che usi da una botta e via 
    for(let x = 0; x < 5; x++){ //se non arriva a 5 giri
        promptNum = parseInt(prompt(`What number do you remember?`)); //inserisci input utente
        if (!arrayPrompt.includes(promptNum) == arrayrandom.includes(promptNum)) { //se il numero dentro l'array prompt è uguale al numero array random pushamelo
            arrayPrompt.push(promptNum);
        }
    }
    // return document.getElementById(`print2`).innerText = `i numeri che ti sei ricordato sono: ${arrayPrompt}`; // concatenazione
    return document.getElementById(`print2`).innerText = "i numeri che ti sei ricordato sono: " + arrayPrompt;
}