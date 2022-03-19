//Crear un programa que pida al usuario un comanto para imprimir un mensaje en document, alert o consola
const printDocument = document.querySelector('#document');
const printConsole = document.querySelector('#console');
const printAlert = document.querySelector('#alert');
const message = document.querySelector('#message');
const containerMessage = document.querySelector('#divMessage');
const h3Message = document.querySelector("h3");


//Evento para imprimir en consola
printConsole.addEventListener('click', (e)=>{
    if(!containerMessage.classList.contains('d-none')){
        containerMessage.classList.add('d-none');
    };
    console.log(cleanMessage(message.value));
    
});

//Evento mostrar alerta
printAlert.addEventListener('click', (e) => {
    if(!containerMessage.classList.contains('d-none')){
        containerMessage.classList.add('d-none');
    };
    alert(cleanMessage(message.value));
});

//Evento renderizar mensaje en el document
printDocument.addEventListener('click', (e) => {
    h3Message.innerHTML = cleanMessage(message.value);
    containerMessage.classList.remove('d-none');
    console.log(h3Message);
});

//Dada la frase: Hoy es un buen dia para estudiar JS; Obtener: Hoy es un buen dia
const cleanMessage = (message)=>{
    if(message.toLowerCase()  == "hoy es un buen día para estudiar js"){
        message = "Hoy es un buen día";
    }
    if(message.toLowerCase()  == "hoy es un buen dia para estudiar js"){
        message = "Hoy es un buen día";
    }
    return message;
}