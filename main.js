// funcion para encriptar el texto
function encryptText() {
    let inputText = document.getElementById('inputText').value;
    
    if (inputText == '') {
      return message('No hay texto ingresado')
    } else {
        document.getElementById('outputText').value = btoa(inputText);
       
    }
    
    document.getElementById('inputText').value = '';
}
//funcion para enviar mensajes de texto html
function message(message)
{
    document.getElementById('alert').innerHTML = message;
}
// function para desencriptar los texto
function decryptText() {
    let encodedText = document.getElementById('inputText').value;
    try {
        let decodedText = atob(encodedText);
        document.getElementById('outputText').value = decodedText;
        
    } catch (e) {
        return message("El texto ingresado no es válido.");
    }
}
// funcion para copiar el texto del campo desencritado
function copyText() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    clearText();
    return message('Texto copiado al portapapeles');
}

//// para eliminar el texto del encriptador
function clearText() {
    document.getElementById('outputText').value = '';
    return message('');
}
