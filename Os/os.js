//modulo nativo os ver las caraceteristicas de la CPU
const os = require('node:os');
const {Suma, Resta} = require('../cjs/modulos');
console.log('informacion del sistema operativo');
console.log('__________________________________');

console.log('nombre del sistema operativo:', os.platform());
console.log('version del sistema operativo:', os.release());
console.log('Arquitectura:', os.arch());
console.log('CPU:', os.cpus()); // escalar procesos en node
console.log('memoria libre:', os.freemem() / 1024 / 1024);
console.log('memoria total:', os.totalmem() / 1024 / 1024); //para saber la cantidad de megas
console.log('memoria ocupada:',Resta(os.totalmem(), os.freemem()));
console.log('tiempo de actividad: ', os.uptime()/ 60 / 60);
