let b1 = document.getElementById("breuk-1");
let b2 = document.getElementById("breuk-2");

let perc = document.getElementById("procent");

let breuk1 = b1.value;
let breuk2 = b2.value;

let percentage = breuk1 / breuk2 * 100 + "%";

console.log(breuk1);
console.log(breuk2);
console.log(percentage);

function updateProcent(){
    let breuk1 = parseFloat(b1.value);
    let breuk2 = parseFloat(b2.value);

    if (breuk2 !== 0) {
        let percentage = (breuk1 / breuk2) * 100;
        if (percentage % 1 === 0) {
            perc.value = percentage.toFixed(0);  
        } else {
            perc.value = percentage.toFixed(2); 
        }
    } else {
        console.log("Breuk 2 mag niet nul zijn.");
    }
}


b1.addEventListener("input", updateProcent);
b2.addEventListener("input", updateProcent);

