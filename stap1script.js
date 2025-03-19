
// Local storage code, Pakt de ID en vult deze ID ook weer in zodra pagina geladen wordt.
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
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

// Breuken berekening.
let b1 = document.getElementById("breuk-1");
let b2 = document.getElementById("breuk-2");
let perc = document.getElementById("procent");

function updateProcent() {
    let breuk1 = parseFloat(b1.value);
    let breuk2 = parseFloat(b2.value);

    if (breuk2 !== 0) {

        let percentage = (breuk1 / breuk2) * 100;

       
        if (percentage % 1 === 0) {
            perc.value = percentage.toFixed(0); 
        } else {
            perc.value = percentage.toFixed(1); 
        }
    } else {
        perc.value = "Onmogelijk"; 
    }
}
b1.addEventListener("input", updateProcent);
b2.addEventListener("input", updateProcent);

