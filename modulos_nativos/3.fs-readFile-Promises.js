const fs =require('node:fs/promises'); //
console.log("Leyendo el primer archivo");
fs.readFile('../README.md', 'utf-8')
.then(text=>{
    console.log('primer texto' + text);
});
console.log("cosas mientras lee el archivo");
console.log("leyendo el archivo");
fs.readFile('../Temario.md', 'utf-8')
.then(text=>{
    console.log('segundo text', text);
})