//estamos realizando la conexion con el modulo Suma
//const  Suma = require('./suma');
//console.log(Suma(8, 12));

/*otra forma segura de poder crear 
la conexion con el modulo de esta 
forma forzando el uso de del nombre de la funcion */
const {Resta}=require('./suma');
console.log(Resta(20, 5));
