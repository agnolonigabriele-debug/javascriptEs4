let input = document.getElementById("numero");
let risultato = document.getElementById("risultato");
let btn = document.getElementById("btn");
let loader = document.getElementById("loader");

btn.addEventListener("click", function(event){
    event.preventDefault();
    const numero = parseInt(input.value);
    if (isNaN(numero)){
        return;
    }
    numero = Math.abs(numero);

    let divisori = [];

    risultato.innerText = "ciao";
});