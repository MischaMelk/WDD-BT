

document.addEventListener("DOMContentLoaded", function() {
    let allInputs = document.querySelectorAll("input, textarea");

    allInputs.forEach(input => {
        let savedValue = localStorage.getItem(input.id);
        if (savedValue) {
            input.value = savedValue;
            console.log(`Loaded saved value for ${input.id}: ${savedValue}`);
        }

        input.addEventListener("input", function() {
            localStorage.setItem(input.id, input.value);
            console.log(`Saved value for ${input.id}: ${input.value}`);
        });
    });
});


let b1 = document.getElementById("breuk-1");
let b2 = document.getElementById("breuk-2");
let perc = document.getElementById("procent");

function updateProcent() {
    // Verkrijg de waarden opnieuw bij elke invoer
    let breuk1 = parseFloat(b1.value);
    let breuk2 = parseFloat(b2.value);

    // Controleer of breuk2 niet 0 is
    if (breuk2 !== 0) {
        // Bereken het percentage
        let percentage = (breuk1 / breuk2) * 100;

        // Rond af afhankelijk van of het percentage een heel getal is
        if (percentage % 1 === 0) {
            perc.value = percentage.toFixed(0); // Zonder decimalen
        } else {
            perc.value = percentage.toFixed(1); // Met 1 decimaal
        }
    } else {
        perc.value = "Onmogelijk"; // Of iets anders om de gebruiker te informeren
    }
}

// Voeg eventlisteners toe voor input events
b1.addEventListener("input", updateProcent);
b2.addEventListener("input", updateProcent);

