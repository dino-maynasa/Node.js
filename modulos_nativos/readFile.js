const fs = require('node:fs');
const text = fs.readFileSync('../Temario.md', 'utf8'); 
//fs.writeFileSync() sincrono, convertir siempre en UTF8
console.log(text);