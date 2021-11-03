// 1. chiedere all'utente il livello di difficoltà
// 2. in base alla scelta presa dall'utente creare una griglia con il numero di quadrati prestabilito
// 3. dare un click che cambia colore ai quadrati, in modo che facciano capire all'utente che il quadrato è stato cliccato
// 4. generare un array di 16 numeri random che non duplichino quelli già esistenti
// 5. far si che se l'utente clicca su uno dei 16 numeri la casella si illumini di rosso
// 6. se l'utente clicca una casella rossa il gioco finisce
// 6.1 scopri tutte le altre caselle 
// 6.2 dai un riscontro del punteggio all'utente

// funzioni 
function generaElemento(elementGen, classPlus) {
    let node = document.createElement(elementGen);
    node.classList.add(classPlus);
    return node
}

let difficulty = prompt("Scegli il tuo livello di difficoltà: basso medio alto");
let levels = 100;

if (difficulty == 'basso') {
    levels = 100;
}

if (difficulty == 'medio') {
    levels = 81;
}

if (difficulty == 'alto') {
    levels = 49;
}


const grill = document.getElementById("container");
const feedback = document.getElementById("feedback");
const emoji = document.getElementById("emoji");

for (let i = 1; i <= levels; i++) {
    let newElement = generaElemento("div", "square");
    newElement.id = i;

    newElement.addEventListener("click",
        function() {
            this.classList.add("clicked-active");
            const id = parseInt(this.id);
            if (bombs.includes(id)) {
                feedback.innerHTML = `---> HAI PERSO <---`;
                emoji.innerHTML = `&#x1F614`;
                this.classList.add("bombs");
            }
        }
    );

    grill.appendChild(newElement);
    newElement.append(i); 
}

const bombs = [];

while (bombs.length < 16) {
    const max = levels;
    const min = 1;

    const number = Math.floor(Math.random()*(max-min)+min);
    if (!bombs.includes(number)) {
        bombs.push(number);
    }
}