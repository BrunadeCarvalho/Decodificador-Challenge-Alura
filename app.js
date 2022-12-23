var input = document.querySelector("input")
            
var buttonCriptografar = document.getElementById('criptografar');
buttonCriptografar.addEventListener("click", criptografia);

var buttonCriptografar = document.getElementById('descriptografar');
buttonCriptografar.addEventListener("click", descriptografia);

const botaoCopiar = document.getElementById("copiar")
botaoCopiar.document.execCommand("copy")

function criptografia(){

    const string = input.value;
    let regexE= /e/gi
    const novaString = string.replace(regexE, "enter");

    let regexI = /i/gi
    const novaStringI = novaString.replace(regexI, "imes");

    let regexA = /a/gi
    const novaStringA = novaStringI.replace(regexA, "ai");

    let regexO = /o/gi
    const novaStringO = novaStringA.replace(regexO, "ober");

    let regexU = /u/gi
    const novaStringU = novaStringO.replace(regexU, "ufat");

    limparAside()
    limparInput()
    mostrarResultado(novaStringU)
    document.getElementById("copiar").classList.remove("classeHidden")

}

function descriptografia(){

    const string = input.value;
    let regexE= /enter/gi
    const novaString = string.replace(regexE, "e");

    let regexI = /imes/gi
    const novaStringI = novaString.replace(regexI, "i");

    let regexA = /ai/gi
    const novaStringA = novaStringI.replace(regexA, "a");

    let regexO = /ober/gi
    const novaStringO = novaStringA.replace(regexO, "o");

    let regexU = /ufat/gi
    const novaStringU = novaStringO.replace(regexU, "u");

    limparAside()
    limparInput()
    mostrarResultado(novaStringU)
}


function limparInput(){
    document.getElementById("texto-usuario").value="";
}

function mostrarResultado(stringCriptografada){
    const paragrafo = document.getElementById('textoCriptografado')
    paragrafo.innerHTML = stringCriptografada
}

function limparAside(){
    const paragrafo = document.getElementById('textoCriptografado')
    paragrafo.innerHTML = ""
}

function copiarTexto(){
    var textoCopiado = document.getElementById("textoCriptografado");

    //deixar texto copiado em azul:
    textoCopiado.select();

    //copiando o texto:
    document.execCommand("copy");

    alert("Texto copiado!")
}

function demoDisplay(){
    document.getElementById("imagem-procurando").style.display="none";
}






