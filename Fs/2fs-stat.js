//sistema de archivos 
const fs = require('node:fs'); //utilizar siempre los prefijos de los modulos nativos 'Npde:' desde la version 16v en adelante
const stats = fs.statSync('../Fs/archivo1.txt'); //modo sincrono
console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), //si es un  directorio
    stats.isSymbolicLink(), //si es un enlace simnbolico
    stats.size, //tamaño en bytes
    );

