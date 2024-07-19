//modulo nativo os ver las caraceteristicas de la CPU
const os = require('node:os');
console.log('informacion del sistema operativo');
console.log('__________________________________');

console.log('nombre del sistema operativo:', os.platform());
console.log('version del sistema operativo:', os.release());
console.log('Arquitectura:', os.arch());
console.log('CPU:', os.cpus()); // escalar procesos en node
console.log('memoria libre:', os.freemem() / 1024 / 1024);
console.log('memoria total:', os.totalmem() / 1024 / 1024);
console.log('uptime: ', os.uptime()/ 60 / 60);
