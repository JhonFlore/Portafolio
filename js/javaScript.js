const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");

const imagen = document.getElementById("miImagen");
const texto = document.getElementById("ningunMensaje");

copia.style.display = "none";

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function encriptar(){


    if(!validarTexto()) {
        const textoEncriptado = encriptador(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        copia.style.display = "block";
        imagen.style.display = "none";
        texto.style.display = "none";
    
    }
}


function encriptador(textoencriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoencriptar = textoencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoencriptar.includes(matrizCodigo[i][0])){
            textoencriptar = textoencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoencriptar;
}

function desencriptar(){

    const textoEncriptado = desencriptador(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    copia.style.display = "block";
    imagen.style.display = "none";
    texto.style.display = "none";
}

function desencriptador(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");
}
