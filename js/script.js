// HTML necessari
const lampImg = document.getElementById("lamp"); // Immagine della lampadina
const toggleButton = document.getElementById("toggleLamp"); // Bottone per accendere/spegnere

//Lampadina Off!!! (spenta inizialmente)
let isLampOn = false;

// Aggiungi un evento "click" al bottone
toggleButton.addEventListener("click", function () {
    // Lampadina On!!!
    isLampOn = !isLampOn;

    // Stato Lampadina
    if (isLampOn) {
        lampImg.src = "img/yellow_lamp.png"; // Mostra la lampadina accesa
        toggleButton.textContent = "Spegni"; // Cambia il testo del bottone
    } else {
        lampImg.src = "img/white_lamp.png"; // Mostra la lampadina spenta
        toggleButton.textContent = "Accendi"; // Cambia il testo del bottone
    }
});