# NODE.JS

## Temario de Node.js

### :00 ¿Qué haremos?

### 0:24 Objetivo y Comunidad Para apoyo

### 1:51 Qué es Node.JS y V8

### 4:18 Orientado a Eventos

### 5:27 ¿Por qué aprender Node.js? 6 Razones

demanda, stack (mern =>(Mongo, Esxpress, React, Node)), productividad, creacion de apis, scraping
facil, escalable, rapido y facil de desplegar.

### 9:44 Historia

desde 2009 en funcionamiento, 2015 parte de open source

### 10:54 Requisitos Para este curso (javascript)

expresiones, tipos de datos, variables, funciones, bucles, arrays, etc.

### 11:57 2 Formas de Instalar Node.JS

version estable lts «Long Term Support» en inglés, lo que se traduce al español como «Soporte a Largo Plazo»
desventaja de NodeJS lts solo se instala una sola version.
*el instalador NVM  manejador de versiones de node.js compatible con diferentes plataformas.
*FNM (fast and simple node.js version version manager,,build in Rust), se debe de ejecutar Rust* [(https://github.com/Schniz/fnm)] instalar rust

### 19:05 Tus Primeros pasos con NODE JS_

### 21:27 Hola mundo y ejecutar ficheros_

### 23:15 Variables Globales

no existe la variable global de window, al ejecutarlo solo muestra not defined
se ocupa la  GlobalThis para poder llamar a variables globales desde cualquier parte.
de hecho console.log();, es parte de globalThis, no es una variable global.
todo sale de GlobalThis.
La globalThis propiedad global contiene el valor globalthis , que suele ser similar al objeto global .

### 25:30 Window VS GlobalThis

La globalThispropiedad global contiene el valor globalthis , que suele ser similar al objeto global .

### 26:45 El Console.log

todo sale de la variable
`globalThis.console.log('Starting');`

### 28:19 Patrón de Diseño Módulo

En node.js nunca se tendra todo el codigo en un solo fichero, no tiene sentido_

#### sistema clasico de commonJS_

para poder exportar los modulos ocupamos:_

```js
        function Suma(a, b){
         return a+b;
        }
        //estamos exportando el modulo Suma
        module.exports =  Suma;
```

**tambien estamos importando el modulo suma en index.js*

```js
        //estamos realizando la conexion con el modulo Suma
        const  Suma = require('./suma');
        console.log(Suma(8,12));
```

*__tambien se puede colocar el nombre que quieras por ejemplo__*

```js
        //estamos realizando la conexion con el modulo Suma
        const  ElnombreQueQuieras = require('./suma');
        console.log(ElnombreQueQuieras(8,12));
```

__sin embargo para evitarnos los errores de sintaxis es recomedable por ocuparlo lo siguiente:__

```js
        function Resta(a, b){
        return a-b;
        }
        //forzando ocupar el mismo nombre de  la funcion
        module.exports = {
        Resta
        }
```

para realizar la importacion

```js
        /*otra forma segura de poder crear 
        forma forzando el uso de del nombre de la funcion */
        la conexion con el modulo de esta 
        const {Resta}=require('./suma');
        console.log(Resta(20, 5));
```

*para poder crear la forma actual, moder no y recomendado de poder exportar modulo_ usando el nombre de archivo archivo.mjs

```js
        //forma actual de poder exportar funciones haciendo referencia a 'export' 
        export function Suma(a, b){
            return a+b;
        }
        export function Resta(a, b){
            return a-b;
        }
```

*forma de poder importar modulo nativo en js_

```js
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

```

*forma de importar modulo nativo con MSJ_

 ```js
//modulo nativo os ver las caraceteristicas de la CPU
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'; 
// se puede realizar la conversion a MJS (convirtiendo de JS a MJS, combinando las teclas ctrl + .)
console.log('informacion del sistema operativo');
console.log('__________________________________');

console.log('nombre del sistema operativo:', platform());
console.log('version del sistema operativo:', release());
console.log('Arquitectura:', arch());
console.log('CPU:', cpus()); // escalar procesos en node
console.log('memoria libre:', freemem() / 1024 / 1024);
console.log('memoria total:', totalmem() / 1024 / 1024);
console.log('uptime: ', uptime()/ 60 / 60);
 ```

*File system

```js
//sistema de archivos 
const fs = require('node:fs'); //utilizar siempre los prefijos de los modulos nativos 'Npde:' desde la version 16v en adelante
const stats = fs.statSync('../temario.ipynb'); //modo asincrono
console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), //si es un  directorio
    stats.isSymbolicLink(), //si es un enlace simnbolico
    stats.size, //tamaño en bytes
    );
```

*Read File

```js

```

### 29:54 Sistema de Módulos CommonJS_

### 32:30 Sistema de Módulos ES Modules

### 35:31 Modulos Nativos

*se puede importar los modulos nativos de la siguinte manera
al ser un sistema nativo nos permite tener acceso a sistema de: archivos, S.O. , os, internet

```js
//desde el 2010  a la fecha ya no es recopmendable por ocuparlo.
const os = require('os');
//recomendable
const os = require('node: os')
```

### 41:02 Pasar de import a require

### 42:33 Extension de archivos

### 40:27 File System

*Read File

```js
const fs = require('node:fs');
const text = fs.readFileSync('../Temario.md', 'utf8'); 
//fs.writeFileSync() sincrono, convertir siempre en UTF8
console.log(text);
```

### 45:31 Asíncrono vs Síncrono

### 51:11 CallBacks en NodeJS

### 54:54 con Promesas

### 56:25 Transformar CallBacks a Promesas

### 58:28 con Async Await

### 1:03:49 En paralelo

### 1:05:26 Versión síncrona

### 1:05:17 Explicación

### 1:15:41 Path

### 1:17:33 Unir Rutas

### 1:18:19 Nombre de un Archivo

### 1:18:57 Obtener la Extensión

### 1:19:43 Primer aplicación

### 1:21:36 Preguntas de los radio escuchas

### 1:22:45 Objeto Global process

### 1:25:20 CWD

### 1:26:41 Platform

### 1:27:39 Comando ls avanzado

### 1:30:01 Mejorando la App | Listar archivos/directorios

### 1:36:18 El resultado de nuestra App

### 1:38:37 Preguntas de los radio escuchas

### 1:42:18 NPM

### 1:45:00 Proyecto e Instalar Dependencias

### 1:47:29 Package.json

### 1:48:10 Instalar PicoColors

### 1:50:00 Semantic Version

### 1:51:00 node_modules

### 1:53:18 Desinstalar dependencias

### 1:53:55 Usando PicoColors

### 1:55:52 Dependencias de Desarrollo y Producción + Eslint

### 2:00:34 Tu primer servidor con Node.js

### 2:03:36 Hack para evitar colisionar puertos

### 2:07:00 Segunda Aplicación

### 2:13:57 Variables de entorno

### 2:15:11 .env._

*Read File

```js

```

\ No newline at end of file
