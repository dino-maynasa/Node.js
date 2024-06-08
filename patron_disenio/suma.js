function Suma(a, b){
    return a+b;
}
//estamos exportando el modulo Suma
module.exports =  {
    Suma
}

function Resta(a, b){
    return a-b;
}
//forzando ocupar el mismo nombre de  la funcion
module.exports = {
    Resta
}