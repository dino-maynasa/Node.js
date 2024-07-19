const fs = require('node:fs');
const stats = fs.statSync('../package-lock.json'); //modo asincrono
console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), //si es un  directorio
    stats.isSymbolicLink(), //si es un enlace simnbolico
    stats.size, //tamaño en bytes
    );
