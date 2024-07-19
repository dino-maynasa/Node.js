import { readFile } from 'node:fs/promises';
Promise.all([
    readFile('../Fs/archivo1.txt','utf-8'),
    readFile('../Fs/archivo2.txt','utf-8'),
]).then(([primer, segundo])=>{
console.log('Primer archivo:\n',primer),
console.log('segundo archivo:\n',segundo)
});