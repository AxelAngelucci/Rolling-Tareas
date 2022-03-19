
const name = prompt('Nombre');
const surname = prompt('Apellido');


if(isNaN(name) && isNaN(surname)){
    alert(`Hola ${capitalize(name)} ${capitalize(surname)}`);
}else{
    alert(`Los nombres no contienen números, subnormal`);
}

function capitalize(string){
    const lower = string.toLowerCase();
    return string.charAt(0).toUpperCase() + lower.slice(1);
}