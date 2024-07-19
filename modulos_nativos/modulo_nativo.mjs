//modulo nativo os ver las caraceteristicas de la CPU
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'; // se puede realizar la conversion a MJS
console.log('informacion del sistema operativo');
console.log('__________________________________');

console.log('nombre del sistema operativo:', platform());
console.log('version del sistema operativo:', release());
console.log('Arquitectura:', arch());
console.log('CPU:', cpus()); // escalar procesos en node
console.log('memoria libre:', freemem() / 1024 / 1024);
console.log('memoria total:', totalmem() / 1024 / 1024);
console.log('uptime: ', uptime()/ 60 / 60);
