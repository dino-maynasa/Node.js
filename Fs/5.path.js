const path = require('node:path');
//barra separadoras segun SO
console.log(path.sep); //determina el tipo de separadores de directorios / en Unix y linyx, \ en Windows

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

//nombre del fichero
const base = path.basename('tmp/midu-secret-files/password.txt');
console.log(base);

//para saber el nombre del fichero quitando  la extension
const filename = path.basename('tmp/midu-secret-files/password.txt', '.txt');
console.log(filename);

// saber el tipo de la extension del fichero
const extension = path.extname('image.png');
console.log(extension);