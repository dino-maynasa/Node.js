//Ls para enlistar archivos y directorios en unn sistema de archivos

//listado de los ficheros
const fs = require('node:fs');
fs.readdir('../Os', (err, files) => { //no se puede manejar los errores en try catch, por que en el callback ya nos esta dando
if(err){
    console.error('error al leer el directorio', err);
}
files.forEach(file =>{
    console.log(file);
});
});