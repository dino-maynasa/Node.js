const fs =require('node:fs'); //
console.log("Leyendo el primer archivo\n");
fs.readFile('../Fs/archivo1.txt', 'utf-8' , (err, text) => { // se ejecuta este callback
    if (err){
        console.log(`error al leer el archivo:`, err)
        return;
    }
    console.log(`${text} \n`);  //lectura durante la ejecucion.
})
console.log("hacer cosas mientras lee el archivo\n");
console.log("leyendo el archivo \n");
fs.readFile('../Fs/archivo2.txt', 'utf-8', (err, text)=>{
    if(err){
        console.log(`error al leer el archivo`, err);
        return;
    }
console.log(`${text} \n`); //otra forma de poder realizar concatenaciones
});
//readFile funcion que nos sirve para poder leear achivos de forma asincrona