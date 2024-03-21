
let textoCodificar = document.querySelector("#textoCodificar");
let textoCodificado = document.querySelector("#textoCodificado");

/*condiciones iniciales del decodificador*/

function condicionesIniciales(){    
    mostrarOcultarMensaje("#con-mensaje","none");
    msgCodificadoDecodificado("#textoCodificar","");
}


function mostrarOcultarMensaje(id, displayMode){
    let elementoHtml = document.querySelector(id);
    elementoHtml.style.display = displayMode;
}

function msgCodificadoDecodificado(id, valor){    
    let textoCodificado = document.querySelector(id);
    textoCodificado.innerHTML = valor;        
}

/*funcion que hace el encrpotado del mensaje */
function encriptar(){
    let texto = textoCodificar.value;
    let pattern = /[A-Z,á-ú,Á-Ú,ü,Ü]/g;
    let result = texto.match(pattern);

    if(texto==='' || result!=null){
        mostrarOcultarMensaje("#con-mensaje","none");
        mostrarOcultarMensaje("#sin-mensaje","inherit");
    }
    else{
        texto = texto.replaceAll("e","enter");
        texto = texto.replaceAll("i","imes");
        texto = texto.replaceAll("a","ai");
        texto = texto.replaceAll("o","ober");
        texto = texto.replaceAll("u","ufat");

        textoCodificar.value='';
        mostrarOcultarMensaje("#con-mensaje","inherit");
        mostrarOcultarMensaje("#sin-mensaje","none");
        msgCodificadoDecodificado("#textoCodificado", texto);

    }
}

/*funcion que hace el desencriptado del mensaje */
function desencriptar(){
    let texto = textoCodificar.value;

    if(texto===''){
        mostrarOcultarMensaje("#con-mensaje","none");
        mostrarOcultarMensaje("#sin-mensaje","inherit");
    }
    else{
        texto = texto.replaceAll("enter", "e");
        texto = texto.replaceAll("imes", "i");
        texto = texto.replaceAll("ai", "a");
        texto = texto.replaceAll("ober", "o");
        texto = texto.replaceAll("ufat", "u");

        textoCodificar.value='';
        mostrarOcultarMensaje("#con-mensaje","inherit");
        mostrarOcultarMensaje("#sin-mensaje","none");
        msgCodificadoDecodificado("#textoCodificado", texto);

    }
}
/* copia al clipboard*/
function copiar(){    
    navigator.clipboard.writeText(textoCodificado.innerHTML);
}

condicionesIniciales();
