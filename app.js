var input = document.querySelector("input")

function decodificador(){
    let frase = ""
    let a = "a";
    let retornoA = "enter";

    let decodificador = frase.replaceAll(a,retornoA)
    console.log(decodificador)
}

var button = document.querySelector("button")
button.onclick = decodificador