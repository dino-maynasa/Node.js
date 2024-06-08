# Temario de Node.js
### 0:00 ¿Qué haremos?
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
        *FNM (fast and simple node.js version version manager,,build in Rust), se debe de ejecutar Rust (https://github.com/Schniz/fnm)
        instalar rust => 
### 19:05 Tus Primeros pasos con NODE JS
### 
### 21:27 Hola mundo y ejecutar ficheros 
###     
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
        En node.js nunca se tendra todo el codigo en un solo fichero, no tiene sentido
        ### _sistema clasico de commonJS_
        para poder exportar los modulos ocupamos: 
        ~~~~
        function Suma(a, b){
         return a+b;
        }
        //estamos exportando el modulo Suma
        module.exports =  Suma;
        ~~~~
        _tambien estamos importando el modulo suma en index.js
        ~~~
        //estamos realizando la conexion con el modulo Suma
        const  Suma = require('./suma');
        console.log(Suma(8,12));
        ~~~
        tambien se puede colocar el nombre que quieras por ejemplo
        ~~~
        //estamos realizando la conexion con el modulo Suma
        const  ElnombreQueQuieras = require('./suma');
        console.log(ElnombreQueQuieras(8,12));
        ~~~
        _sin embargo para evitarnos los errores de sintaxis es recomedable por ocuparlo lo siguiente:
        ~~~
        
        function Resta(a, b){
        return a-b;
        }
        //forzando ocupar el mismo nombre de  la funcion
        module.exports = {
        Resta
        }~~~
        _para realizar la importacion_
        ~~~
        /*otra forma segura de poder crear 
        forma forzando el uso de del nombre de la funcion */
        la conexion con el modulo de esta 
        const {Resta}=require('./suma');
        console.log(Resta(20, 5));
        ~~~
        _para poder crear la forma actual, moder no y recomendado de poder exportar modulo_ usando el nombre de archivo _archivo.mjs_
        ~~~
        //forma actual de poder exportar funciones haciendo referencia a 'export' 
        export function Suma(a, b){
            return a+b;
        }
        export function Resta(a, b){
            return a-b;
        }
        ~~~
        _ forma de poder importar modulo_
        ~~~
        //forma actual, recomendado de poder importar funciones
        import {Suma, Resta} from './suma.mjs' 
        console.log(Suma(18, 2));
        console.log(Resta(20,5));
        ~~~
### 29:54 Sistema de Módulos CommonJS
        
### 32:30 Sistema de Módulos ES Modules
### 35:31 Modulos Nativos
### 41:02 Pasar de import a require
### 42:33 Extension de archivos
### 40:27 File System
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
### 2:15:11 .env?
 











