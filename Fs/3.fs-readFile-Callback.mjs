import { readFile } from 'node:fs'; //
console.log("Leyendo el primer archivo\n");
readFile('../Fs/archivo1.txt', 'utf-8' , (err, text) => { // se ejecuta este callback
    if (err){
        console.log(`error al leer el archivo:`, err)
        return;
    }
    console.log(`${text} \n`);  //lectura durante la ejecucion.
})
console.log("hacer cosas mientras lee el archivo\n");
console.log("leyendo el archivo \n");
readFile('../Fs/archivo2.txt', 'utf-8', (err, text)=>{
    if(err){
        console.log(`error al leer el archivo`, err);
        return;
    }
console.log(`${text} \n`);
});
//readFile funcion que nos sirve para poder leear achivos de forma asincrona


//* preguntar por que el error se esta dando en el momento de la ejecucion desde la terminal