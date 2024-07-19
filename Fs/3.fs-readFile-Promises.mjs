import { readFile } from 'node:fs/promises'; //'node:fs/promises' se ocupa para versiones de node modernos desde la version 10.0 en adelante
//obligatorio el uso de node:fs/promises
console.log("Leyendo el primer archivo");
readFile('../Fs/archivo1.txt', 'utf-8')
.then(text=>{
    console.log('mostrando contenidos del archivo 1: \n' + text);
});
console.log("cosas mientras lee el archivo");
console.log("leyendo el archivo");
readFile('../Fs/archivo2.txt', 'utf-8')
.then(text=>{
    console.log('mostrando los contenidos del archivo 2 \n', text);
})