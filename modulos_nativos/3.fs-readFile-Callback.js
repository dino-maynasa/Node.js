const fs =require('node:fs/promises'); //
console.log("Leyendo el primer archivo");
fs.readFile('/README.md', 'utf-8' , (err, text) => { // se ejecuta este callback
    console.log('primer texto',text);  //lectura durante la ejecucion.
})
console.log("cosas mientras lee el archivo");
console.log("leyendo el archivo");
fs.readFile('../Temario.md', 'utf-8', (err, text)=>{
console.log('segundo text', text);
})