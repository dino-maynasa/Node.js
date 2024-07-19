//modulo nativo os ver las caraceteristicas de la CPU
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';
import {Suma, Resta} from '../mjs/modulos.mjs'
console.log('informacion del sistema operativo');
console.log('__________________________________');

console.log('nombre del sistema operativo:', platform());
console.log('version del sistema operativo:', release());
console.log('Arquitectura:', arch());
console.log('CPU:', cpus()); // escalar procesos en node
console.log('memoria libre:', freemem() / 1024 / 1024);
console.log('memoria total:', totalmem() / 1024 / 1024);
console.log('memoria ocupada:',Resta(totalmem(),freemem()));
console.log('tiempo de actividad: ', uptime()/ 60 / 60);
