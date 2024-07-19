const fs = require('node:fs/promises');

(async () => {
try {
    console.log('Leyendo archivos de forma paralela...');

    const [data1, data2] = await Promise.all([
    fs.readFile('archivo1.txt', 'utf-8'),
    fs.readFile('archivo2.txt', 'utf-8')
    ]);

    console.log('Contenido del primer archivo:\n', data1);
    console.log('Contenido del segundo archivo:\n', data2);
} catch (err) {
    console.error('Error al leer los archivos:', err);
}
})();
