import { readFile } from 'node:fs/promises';
console.log('leyendo el primer archivo:..');
const PrimerArchivo = await readFile('../Fs/archivo1.txt','utf-8');
console.log('primer archivo:\n', PrimerArchivo);

console.log('haciendo las cosas mientras se lee los archivos:..');

console.log('leyendo el segundo archivo:..');
const SegundoArchivo = await readFile('../Fs/archivo2.txt','utf-8');
console.log('segundo archivo:\n', SegundoArchivo);
