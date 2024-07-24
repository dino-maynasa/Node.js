//Ls para enlistar archivos y directorios en unn sistema de archivos

//listado de los ficheros
const fs = require('node:fs/promises');
fs.readdir('../Fs')
.then(files=>{ 
    files.forEach(file => {
    console.log(file);
});
})
.catch(err =>{
if(err){
    console.error('error al leer el directorio', err);
}
});