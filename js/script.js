let input = document.getElementById("numero");
let risultato = document.getElementById("risultato");
let form = document.getElementById("formDivisori");
let spinner = document.getElementById("spinner");

function aggiornaSfondo(rosso) {
    risultato.classList.toggle("bg-danger", rosso);
    risultato.classList.toggle("bg-white", !rosso);
    risultato.classList.toggle("text-white", rosso);
}

//event listaner al form invece che al btn per consentire di calcolare i divisori anche col tasto enter oltre che col pulsante stesso 
form.addEventListener("submit", function(event){
    event.preventDefault();//per non far ricaricare la pagina

    const valore = input.value.trim();
    const numero = Number(valore);
    if (valore === "" || !Number.isSafeInteger(numero)) {
        spinner.classList.add("d-none")
        risultato.textContent = "Inserisci un numero intero valido";
        aggiornaSfondo(true);
        return;
    }

    const numeroAssoluto = Math.abs(numero);
    if (numeroAssoluto === 0) {
        risultato.textContent = "0 non è un numero primo.";
        aggiornaSfondo(false);
        return;
    }

    const divisori = [];
    for (let divisore = 1; divisore <= numeroAssoluto; divisore++) {
        if (numeroAssoluto % divisore === 0) {
            divisori.push(divisore);
        }
    }

    spinner.classList.add("d-none")
    const primo = numero > 1 && divisori.length === 2;
    risultato.textContent = `${numero} ${primo ? "è" : "non è"} un numero primo. Divisori: ${divisori.join(", ")}`;
    aggiornaSfondo(primo);
});