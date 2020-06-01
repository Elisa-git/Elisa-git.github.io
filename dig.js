var texto = "Oi, sou Elisa Mesquita";
var result;

var count = 0;
function digitar() {
    result = document.getElementById("result");
    window.setTimeout(function() { inserir(texto[count]) }, 200);
}

function inserir(letra) {
    result.innerHTML += letra;
    count++;
    if(count < texto.length)
        window.setTimeout(function() { inserir(texto[count]) }, 200);
}

window.onload = digitar;