const url="https://api.adviceslip.com/advice";
var id = 0;
var String = "";

async function advice(){
    fetch(url)
    .then(retur => retur.json())
    .then((data) => {
        id = data.slip.id;
        String = data.slip.advice;
        document.getElementById("advice").textContent = 'ADVICE #' + id ;
        document.getElementById("gerator_api").textContent = String;
    })
}
document.getElementById("gerar").addEventListener("click", advice);
