window.addEventListener("load", inicio, true);


function inicio(){
    
    document.getElementById("mensaje-principal").addEventListener("keyup", (evento) => {
        let regExp = new RegExp("[áéíóúâêîôû]","g");
        let entrada = evento.target.value; 
        let texto = regExp.test(entrada);
        
        if (texto==true) {
            let alerta = document.getElementById("parrafo-informacion");
                alerta.style.color="red";
                alerta.textContent= "! Solo letras minúsculas y sin acento";
                    setTimeout(()=> alerta.textContent="",8000);

            document.getElementById("codificar").disabled = true;
            document.getElementById("descodificar").disabled = true;
        } else if(!entrada){
            let advertencia = document.getElementById("parrafo-informacion");
                advertencia.style.color="white";
                advertencia.textContent = "Ingrese el texto a descifrar y/o cifrar";
                    setTimeout(()=> advertencia.textContent="",4000);
        } else {
                document.getElementById("codificar").addEventListener("click",(evento) => {
                    evento.preventDefault();
                    document.getElementById("mensaje-secundario").value = cifrar();       
            });                              
                document.getElementById("descodificar").addEventListener("click",(evento) => {
                    evento.preventDefault();
                    document.getElementById("mensaje-secundario").value = descifrar();
            });           
                document.getElementById("parrafo-informacion").textContent = "";
                document.getElementById("mensaje-secundario").value = "";
                document.getElementById("codificar").disabled = false;
                document.getElementById("descodificar").disabled = false;      
        }; 
    },true);

    document.getElementById("copiar").addEventListener("click",(evento) => {
        evento.preventDefault();
        copiar();
    }, true);
    
};


function cifrar(){
    let texto = document.getElementById("mensaje-principal").value;
    let regExp = new RegExp("[áéíóúâêîôû]","g");
    let entrada = texto.value;
    let y =regExp.test(entrada);

    if(y==true){       
                return "";               
    } else {
            let vocales = {'a':'ai','e':'enter','i':'imes','o':'ober','u':'ufat'};
            return texto.replace(/[aeiou]/g, i => vocales[i]);
        };
};
    
    
function descifrar(){
    let texto = document.getElementById("mensaje-principal").value;
    let patron = /ai|enter|imes|ober|ufat'/g;
    let x = texto.match(patron);
        
    if(x!=null){
        let vocales = {'ai':'a','enter':'e','imes':'i','ober':'o','ufat':'u'};
        return texto.replace(/ai|enter|imes|ober|ufat/g, i => vocales[i]);    
    } else {        
        return "";      
    };  
};
    
function copiar(){ 
    let texto = document.getElementById("mensaje-secundario");
        
    if(!texto){
        let mensaje = document.getElementById("mensaje-portapapeles");
        mensaje.innerHTML = "No se encontro ningun texto";
        setTimeout(()=> mensaje.innerHTML="Copiar texto",2000);              
    } else {
        texto.select();
        texto.setSelectionRange(0, 99999);
        var copiado = navigator.clipboard.writeText(texto.value);
    };
        
    if(copiado!= null){
        let mensaje = document.getElementById("mensaje-portapapeles");
        mensaje.innerHTML = "Copiado al portapapeles";
        setTimeout(()=> mensaje.innerHTML="Copiar texto",4000);              
    };
};

