# Curso de HTML 5
### 1. ¿Qué es HTML5?  
Es un estándar que engloba a tres tecnologías: HTML (Estructura), CSS (Apariencia) y Javascript (Interactividad)

Para indicar qué una página está en HTML 5 se coloca la cabecera 
\<!DOCTYPE html\>

Para no tener que concatenar se usa:
`${nombre de la variable}`;

El estándar puede encontrarse en: 
[html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/)
o
[w3.org](http://www.w3.org)

### 2. Etiquetas importantes
- **header**: La cabecera.
- **nav**: Barra de navegación.
- **aside**: Barra lateral.
- **blockquote**: Se utiliza paera citas
- **hgroup**: Se utiliza para englobar varios títulos. Está obsoleta y ya no se recomienda su uso.
- **article**: Se utiliza para englobar contenidos similares. Se utiliza en lugar de hgroup.
- **section**: Contenido principal de la página.
- **footer**: Pie de la página.
- **mark**: para resaltar texto.
- **em**: Indica enfasis y sustituye a la anterior i.
- **strong**: Negrita
- **small**: Para textos legales.
- **cite**: Para títulos de películas, libros, obras de teatro.
- **address** -> para información de contacto. Dene ir dentro del footer y es una etiqueta blocklevel (retorno de carro antes y después)
- **time**: Reperesenta fecha y hora. El atributo pubdate indica que está en formato de fecha y hora. ej: *datetime="2021/07/31" pubdate*

Se puede usar una hoja de estilos reset para borrar todos los estilos puesto que cada navegador tiene sus propios estilos.
Este es un ejemplo:
       
    html, body, h1, h2, h3, h4, h5, h6, p, ol, ul, li, pre, code, address, variable, form, fieldset, blockquote {
        padding: 0;
        margin: 0;
        font-size: 100%;
        font-weight: normal;
       }
       table { border-collapse: collapse; border-spacing: 0; }
       td, th, caption { font-weight: normal; text-align: left; }
       img, fieldset { border: 0; }
       ol { padding-left: 1.4em; list-style: decimal; }
       ul { padding-left: 1.4em; list-style:square; }
       q:before, q:after { content:''; 
    } 

### 3. Figure y figcaption
- Figure: Se utiliza para insertar elementos que tiene que ver con el contenido. Pueden ser imágenes, video, ... Dentro de las imágenes que se admiten están las gif, jpg y png. Las gifs tienen como mucho 256 colores y tanbto gif como png admite transparencia.
- Figcaption: Tiene la descripción de la imagen

### 4. CSS
Se basa en el módelo caja contenedor. Las etiquetas pueden ser block o inline. Los selectores de css eran de tipo: etiqueta, id, clase. En css3 se utilizan dos nuevos selectores:

- p[name=""] : Busca todos los elementos con ese nombre. Además pueden tener: 
    - ^= Selecciona los elementos que empiezan por.
    - $= Selecciona los elementos que terminan por.
    - \*= Selecciona los elementos que contienen.
- Pseudoclases : 
  - p:nth-child(2) : el estilo se aplicará al segundo elemento hijo.
  - p:nth-child(odd): Se aplicará el estilo a todos los p impares.
  - p:nth-child(even): Se aplicará el estilo a todos los p pares.
  - p:first-child: Se aplicará a los primeros hijos.
  - p:last-child: Se aplicará a los últimos hijos.
  - p:only-child: Se aplicará al grupo de elementos que tienen un solo hijo.
 
 **Mas elementos nuevos de CSS3:**
 - border-radius: 10px: Se redondea los bordes del elemento.
 - box-shadow: #999 5px 5px 10px: Es la sombra de la caja. Los parámetros son color, desplazamiento horizontal, desplazamiento vertical, dfuminación.
 - text-shadow: #999 5px 5px 10px: Crea una sombra para un texto.
 - @font-face {
       font-family:'nombreLetra';
       url();
    }: Para añadir un tipo de letra no existente en el ordenador del cliente.
   
  - background: -mz-linear-gradiant (top, #00F, #3FF): Es el degradado lineal. -moz es para mozilla, -webkit para chrome, -ms para explorer y -o para opera.
  - rgba: El último parámetro permite la transparencia del texto.
  - outline: 2px dashed color: Para crear un borde exterior al objeto.
  - -moz-transform: scale(1.1): Se aplica la escala a un determinado elemento.
    -moz-transform: rotate(30deg): Rota el elemento de 30 grados.
  - -moz-transiction: all 0.5s ease 0.5s: Crea una trasición. Los parámetros son propiedad, duración, timking function y retardo.
 
 ### 4. JAVASCRIPT
 Su función es añadir dinamismo a la página.
 
 Nuevos elementos:
 1. querySelector("") : Retorna el primer elemento que corresponde al grupo de selectores indicados entre comillas.
 2. querySelectorAll("") : Retorna todos los elementos que corresponde al grupo de selectores indicados entre comillas.
 3. addEventListener(evento, funcion, boolean): Permite añadir un evento a un elemento.
 4. Array dinámico:
 
     var imagenes=[];
     imagenes.push(imagen);
 
 5 - for in y for of : **for in** obtiene las propiedades de un objeto y **for of** obtiene los elementos de una estructura (al estilo de un for each)
 
  ### 5. VIDEOS
  
  - Las extensiones que se usan son mp4 y ogg.
  - Se utiliza la nueva etiqueta **\<video\>**. Los atributos que tiene son: src, controls, autoplay, loop, poster, preload.
  - La etiqueta **source** permite indicar el formato de video a reproducir. Pueden ponerse varios. Si no funciona uno, se intentará el siguiente.
  - El objeto video tiene las siguientes propiedades:
       - duration
       - currentTime
       - paused
       - ended
       
       
       
   - y los siguiente métodos:
       - play
       - pause
  
  ### 6. AUDIOS
  La etiqueta es \<audio\> es igual que la anterior. Los formatos son mp3 y ogg
  
  ### 7. FORMULARIOS
 - Los tipos era text, button, password y submit. Ahora están: email, search, url, tel, number, range, date, week, month, time, datetime.
 - El tipo range permite que se muestre un dial en el que podemos seleccionar un valor entre min y max. Tenemos los atributos: max, min y step.
 - Atributos nuevos: palceholder, required , multiple (permite introducir mas de un valor) , autofocus (permite poner el foco en un campo por defecto), pattern (establece un patrón para validaciones complejas), form (permite añadir un elemento de fuera a un formulario).
 - **datalist**  Permite crear una lista con los valores posibles. El atributo list se usa para enlazar el datalist con el campo. 
 - **Api forms**:
    - Método setCustomValidity(""). Se utiliza para aplicar un mensaje concreto cuando se da una determinada condición. 
    - Evento invalid: Se ejecuta cuando no se cumple la validación de formulario. Este evento construye un objeto error y permite que accediendo al target obtengamos el elemento que ha dado error.
    - checkValidity(): Este método devuelve true si la validación del formulario es correcta.
    - obj.validity.valid: Nos permite saber si elemento cumple o no con la validación.
    - obj.validity.valueMissing: Nos permite saber si el elemento no ha cumplicado la condición de obligatoriedad(required).
       
 - Existe una etiqueta outpout, que puede cambiar su contenido dinámicamente.

### 8. CANVAS

Permite pintar de forma nativa gráficos y animaciones. Los métodos son:
- getContext("2d"): Para indicar que es un canvas de dos dimensiones.
- fillRect(x,y,ancho,alto): Para pintar un rextangulo relleno.
- strokeRect (x,y,ancho,alto): Para pintar un rectángulo vacío.
- clearRect (x,y,ancho,alto): Para pintar un hueco que tandrá el color del canvas.

Los colores son propiedades: strokeStyle, fillStyle y globalAlpha (con un valor de 0 a 1). Ej: canvas.fillStyle = "red";

Para poder pintar se debe definir un lienzo de dos posiciones en javascript. Ej: canvas.getContext("2d")

  1. **Degradados** Hay de dos tipos:
  - Lineales: createLinearGradient (x1,y1,x2,y2) Las primeras coordenadas es la posición incial del degradado y las últimas, la última posición del degradado.
  - Radiales: createRadialGradient (x1,y1,x2,y2) Es el el centro del círculo y el radio.
  
  Para indicar el color se usa addColorStop (posicion,color); La posicion es un valor entre 0 y 1. Este método se aplica sobre el debradado obtenido anteriormente. ej:

      var degradado = lienzo2.createLinearGradient(0,0,500,300);
      degradado.addColorStop(0,"green");
      degradado.addColorStop(1,"red");
      lienzo2.fillStyle = degradado;
      lienzo2.fillRect(0,0,500,300);
     
  2. **Trazados** En ocasiones es necesario procesar la imagen antes de enviarla al canvas. El objetivo es crear formas mas complejas y animaciones (en [www.w3.org](https://www.w3.org/) e. están todas las prpiedades y métodos del API HTML5. Métodos:
  - beginPath, closePath, stroke, fill y clip. El clip nos sirve para crear una máscara dónde lo que dibujemos sólo aparecerá en este área.
  - Los métodos para crear el trazado. **moveTo(x,y), lineTo(x,y), rect (x,y,ancho,alto), arc (x,y,radio, angulo_inicial, angulo_final,direccion), bezierCurveTo(a,b,c,d,x,y), quadraticCurveTo(a,b,x,y)**.
  La diferencia entre bezier y quadratic es que la curva bezier tiene dos puntos de control.
  
  3. **Tipos de línea** Propiedades:
  - lineWidth: grosor de la línea.
  - lineCap: Terminación de la línea. Los valroes son: butt, round, square.
  - lineJoin: Conexión entre lñineas. Los valores: round, bevel y miter.
  - miterLimit: Se usa junto a lineJoin con valor miter. Determina cuánto ha de extenderse la unión entre líneas.
  - **IMPORTANTE** Cada vez que se cambia las características de la línea, debe usarse un nuevo beginPath().
  
  4. **Texto Canvas** Propiedades
  - font: Admite los mismos valores que en CSS.
  - textAlign: Alineamiento horizontal. Valores: start, end, left, right, center.
  - textBaseLine: Alineamiento vertical. Valores: top, bottom, hanging, middle, alphabetic, ideographic.
  
  3 métodos para dibujar texto:
  - strokeText (texto, x, y).
  - fillText (texto,x,y).
  - measureText (texto): Devuelve información sobre el tamaño en pixeles del texto.

  Propiedades:
  - shadowColor. Color de sombra.
  - shadowOffsetX. Desplazamiento horizontal de la sombra.
  - shadowOffsetY. Desplazamiento vertical de la sombra.
  - shadowBlur. Difuminado de la sombra.

  5. **Tranformaciones** Métodos:
  - translate(x,y): Mueve el origen del lienzo.
  - rotate(radianes): rota el lienzo.
  - scale(x,y): Aumenta o disminuye el lienzo.
  - 
  - transform(m1,m2,m3,m4,dx,dy): Cambia las características del lienzo. Es un compendio de los tres anteriores. 
    m1: scale x, m2: rotate radianes, m3: sesgar el texto, m4: scale y, dx: translate x, dy: translate y
    Este método es acumulativo.
    
  - setTransform(m1,m2,m3,m4,dx,dy): Reinicia las características de la matriz. Es igual que el anterior, pero no es acumulativo, si no que reinicia las características.
  - save(): Graba el estado del lienzo.
  - restore(): Restaura el estado grabado del lienzo.
  
  6. **Superposiciones e imágenes**
  Para superposiciones, se usa la propiedad [**globalCompositeOperation**](https://dev.w3.org/html5/2dcontext-LC/) con los siguientes valores: source-in, source-out, source-atop, lighter, xor, destination-over, destination-in, destination-out, destination-atop, darker, copy.
  
  Para las imágenes se usa el método drawImage:
  - drawImage(imagen,x,y)
  - drawImage(imagen,x,y,ancho,alto)
  - drawImage(imagen,x1,y1,ancho1,alto1,x2,y2,ancho2,alto2): 
    - x1, y1: Es la coordenada x e y para empezar el recorte.
    - ancho1, alto1: Ancho y alto de la imagen recortada.
    - x2, y2: Posición desde la que se pinta la imagen
    - ancho2,alto2: Tamaño de la imagen recortada.

  7. **Imágenes como datos**
  - getImageData (x,y,ancho,alto): los dos primeros párametros son la posición de inicio y los dos últimos la posición de fin.
  - putImageData (datosImagen, x, y)
  - createImageData (ancho, alto)
  
  Ej: [imagen-canvas.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/imagen-canvas.html)
  
  8. **Animaciones**
  Se utilizan para animaciones sencillas los métodos:
  - clearRect(x,y)
  - setInterval(function,interval);
  - clearInterval();

  Ej: 
  - pelota botando. [animacion-pelota-canvas.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/animacion-pelota-canvas.html)
  - animacion-ojos. [animacion-ojos.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/animacion-ojos.html)
  
 ### 9. DRAG AND DROP
 Si trata de arrastrar un objeto de un área de la página a otra. Los eventos son:
 - **Objeto a arrastrar**. dragstart, drag, dragend
 - **Objeto destino**. 
   - dragenter: cuando el ratón entra en el área destino.
   - dragover: cuando el ratón se mueve sobre el área destino.
   - drop: cuando el elemento a arrastrar es soltado sobre el área destino
   - dragleave: cuando el elemento a arrastrar se sale del área destino.

Se debe establecer tanto el objeto origen como el destino. Para ello se usa el objeto **dataTransfer** que tiene los métodos:
setData(formato_de_informacion,informacion): Se establece que datos serán transferidos.
getData(formato_de_informacion): Se establece que datos se capturarán.

El objeto dataTranfer también tiene una colección llamada files que contiene todas las características del fichero que se arrastra.

Para que nos permita arrastrar objetos en los navegadores hay que usar el método: **preventDefault()**


Ej:
[prueba-dragdrop.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/prueba-dragdrop.html) y [prueba-dragdrop2.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/prueba-dragdrop2.html)

También se puede arrastrar archivos. Las propiedades de los archivos arrastrados se encuentran en la colección: **dataTransfer.files**. Un ejemplo está en el fichero:
[prueba-dragdrop-ficheros.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/prueba-dragdrop-ficheros.html)
              
 ### 10. API GEOLOCATION
 Hay muchas maneras de saber la ubicación de un usuario: localizando la IP, Api Geolocation de HTML5, bases de datos de IPs.
 La API Geolocation tiene tres métodos principales:
 - getCurrentPosition(ubicación, errores, configuración): Posición del usuario. Devuelve un objeto Position que tiene las propiedades: 
   - coords: Contiene un conjunto de propiedades que determinan la posición: latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, speed
   - timestamp: Indica el moment oen el que se dió la posición.
  El objeto configuración tiene tres propiedades:
    - enableHighAccuracy: Si es true se usarán sistemas GPS para obtener la posición. Es false por defecto.
    - timeout: tiempo en milisegundos para determinar la posición.
    - maximumAge: Determina el tiempo máximo en milisegundos para ir a la caché a obtener la última posición.
    
 - watchPosition(ubicación, errores, configuración): Esté método tiene la posibilidad de refrescar la posición del usuario durante un tiempo. Se ejecuta cada vez que la posición cambia.
 - clearWatch(id): Resetea watch position

El mapa que se ha tenido que usar es mapBox dado que el de google maps es de pago. Un ejemplo de su uso lo tenemos en:
[ubicacion.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/ubicacion.html)

Para mas información mirar en [mapBox](https://docs.mapbox.com/).

 ### 11. WEB STORAGE
 Permite almacenar información de manera local en el ordenador del cliente. Hay dos posibilidades:
 - sessionStorage: Almacenamiento temporal mientras existe la sesión de la ventana activa (si se cierra la pestaña, se pierde).
 - localStorage: Almacenamiento permanente incluso cuando se cierra el navegador.

El objeto es webStorage

Hay varios métodos principales:
- setItem: Almacenar la variable.
- getItem: Leer la variable.
- removeItem: Elimina el item indicado.
- clear: Borra todos los elementos.

ej:  [webStorage.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/webStorage.html)

 ### 12. INDEXEDDB
 Se utiliza principalmente en dos casos:
 - Almacenar grandes volúmenes de datos.
 - localStorage y sessionStorage se quedan cortos.

Para almacenar los datos se utilizan almacenes, que guardan los objetos (se corresponden con los registros de una base de datos convencional).

La ruta dónde se guarda esta base de datos es:
- Firefox: c:/users/[usuario]/AppData/Roaming/Mozilla/Firefox/Profiles/*.default/storage
- Chrome: c:/users/[usuario]/AppData/Local/Google/Chrome/UserData/default/IndexDB

Para crear indexedDB hay que seguir estos pasos:
1. Crear la base de datos: indexedDB y método open.
2. Crear objetos: createObjectStore
3. Crear transacción: Método transaction y agregar mediante objectStore.
4. Agregar elementos: Método add
5. Mostrar elementos: Método openCursor.

ej:  [prueba BD.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/prueba%20BD.html) y [indexed.js](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/js/indexed.js)

### 12. API FILE
Para poder gestionar los aspectos relacionados con la gestión de ficheros, se dispone de tres especificaciones:
-  **API File**: Para interactuar con el fichero local del usuario.
-  **API File Directories & System**: Generación de un sistema de archivos.
-  **API File Writer**: Escritura de contenido dentro de un fichero.

Para poder usar la información de un fichero, debemos usar la interfaz FileReader, que nos devuelve un objeto con estos métodos:
- **readAsText**: Intenta interpretar cada byte del archivo como si fuera texto.
- **readAsBinaryString**: Devuelve la información de cada byte como si fuera una sucesión de números entre 0-255. Sirve para mover archivos de un lado a otro.
- **readAsDataURL**: Nos devuelve el archivo como una cadena de tipo url codificado en base 64. Para enviar información cifrada, mostrar imágenes que se han leído de un fichero.
- **readArrayAsBuffer**: Devuelve la información como un array en formato binario.

El objeto file tiene estas propiedades principales: name, size y type.

ej:  [prueba-file.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/prueba-file.html)

#### **Crear un fichero**
Se utiliza la [API File Directories & System](https://dev.w3.org/2009/dap/file-system/file-dir-sys.html). Los pasos a dar son:
- Petición al navegador de espacio en el disco duro. Hay dos tipos de espacio: Temporal (navigator.webkitTemporaryStorage.requestQuota) o persistente (navigator.webkitPersistentStorage.requestQuota)
- Creación del sistema de archivos solo accesible desde la aplicación: navigator.webkitRequestFileSystem
- Creación de archivos o directorios nuevos o apertura de existentes: getFile, getDirectory.
- Opciones sobre los archivos: 
  - listar: 
       -  createReader (crea un objeto DirectoryReader): A su vez tiene la propiedad readEntries, que contiene todos los archivos de la ruta.

  - mover:
       -  moveTo (directorio, opciones, exito, error): Permite mover un fichero al directorio indicado.

  - eliminar: remove (para borrar archivos) y removeRecursevily (para borrar directorios)
  
- Escribir y agregar contenido a los archivos con API File Writer.
  - Se crea mediante createWriter el fileWriter
  - Con el fileWriter se escribe en el fichero. Este objeto tiene los métodos:
       -  write(datos): Escribe en el fichero. Los datos tienen que pasarse como un blob.
          El tipo blob es un objeto que representa los datos en bruto (binario). Es una alternativa en javascript para no cargar todos los datos en memoria.
          Se procesa la información binaria en trozos.
       -  seek(desplazamiento): Posición del archivo dónde será escrito el contenido.
       -  truncate(tamaño): Cambia el tamaño del fichero utilizando el parámetro en bytes.
  Tiene las propiedades position y length
  Los eventos mas importantes son: writestart,progress,write,abort,error,writeend.

Para leer el fichero se tiene que usar el método **objetoFile.file(exito,error)**. El fichero que se obtiene con getFile tiene el método file para poder leer el archivo.
Dentro de la función de éxito debemos llamar al FileReader y en el método readAsText se le pasa el archivo que se obtiene en el método file. En el evento onload del fileReader se llama a la función que obtendrá el contenido del fichero del e.target.result.

Ej: Un sistema de archivos para Chrome
[creando_archivos.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/creando_archivos.html)

Solo funciona en Chrome y Opera. No en firefox ni explorer.

### 13. API COMMUNICATION

Permite la gestión de conexiones remotas. Usa la tecnología AJAX. El principal objeto que viene con HTML5 es XMLHttpRequest. Permite:
- Actualizar parte de una página sin actualizar el navegador.
- Hacer petición de datos después de haber cargado la página.
- Recibir datos después de haber cargado la página.
- Enviar datos al servidor después de haber cargado la página.
Para usarlo hay que llamar a su constructor: new XMLHttpRequest();

Los métodos son:
- open(método, url, asincrono)
- send(datos)
- abort()

Los eventos mas comunes son:
loadstart, progress, abort, error, load, timeout, loadend

Ej: [Crear barra de carga con fichero grande](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/crear-fichero-grande.html)

1. **Envio de datos**. Se usa el objeto FormData con el método append para añadir los valores al formulario
Ej: [Enviar datos a una página jsp](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/api-communication-envio-datos.html)

2. **Enviar archivos**. Se usa la propiedad upload del objeto XMLHttpRequest.
Ej: [Envío de fichero a página php](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/api-communication-envio-archivos.html)

3. **Cross Document Messaging (API Web Messaging)**: Permite la comunbicación entre aplicaciones web. Tiene varios métodos:
  - postMessage(mensaje, destino);
  - Evento **message** que se desencadena al recibir el mensaje. Tiene las propiedades: 
    - data: contenido del mensaje.
    - origin: origen del documento que envió el mensaje (dominio)
    - source: fuente de donde viene el mensaje (el documento)

Ej: Pagina [emisora](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/api_communication_emisor.html) y [receptora](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/api_communication_receptor.html)


### 13. API WEB WORKERS

Permite la programación multiproceso dado que, por defecto, un programa solo puede ejecutar un proceso. La solución de HTML5 es crear un fichero js que se comunica con la página a través de mensajes. 
Ej: [webworker.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/api-webworker.html) y [webworker.js](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/js/webworker.js)

En este ejemplo, para crear este multiproceso, se usa el objeto WebWorker(direccion de archivo);
Posteriormente, se añade un escuchador a ese objeto con el vento "message". Al pulsar en enviar e debe enviar el mensaje mediante el método postMessage del objeto WebWorker

Por otro lado, existe la posibilidad de crear worker compartidos (SharedWorker). Estos elementos son compartidos por varias páginas.
- Constructor: new SharedWorker(url). Retorno dos objetos: SharedWorker y MessagePort (con el puerto de la escucha)
- Propiedad **port**: El puerto asignado a esa escucha.
- Evento **connect**: Se utiliza para controlar las conexiones. Se ejecuta cada vez que el js destino detecta una nueva conexión.
- Método start(): Se encarga de iniciar el envío de mensajes.

Ej:[sharedwebworker.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/api_sharedwebworker.html), [sharedwebworkeriframe.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/api_sharedwebworkeriframe.html) y [sharedwebworker.js](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/js/sharedwebworker.js)

En este ejemplo se han creado dos páginas. La segunda está en un iframe dentro de la primera. Cuando se envían los datos desde la primera, se crea un sharedworker a un fichero js que procesará esa conexión. A su vez, en el iframe se carga otra página que también llamará al mismo fichero js. En la primera página se mostrará un alert y en la segunda un section con la misma respuesta que da el fichero js. Algo muy importante de este ejemplo es que, cuando ponemos a la escucha el SharedWorker debemos hacerlo con respecto a la propiedad port. 
En el fichero js que va a procesar ambas peticiones, se indica un evento connect. Este evento connect genera, cuando se dispara, un array con una única posición donde se encuentra el puerto: ports[0]. Para cada uno de esos ports[0] se pone el puerto a la escucha y, se almacena en un array global cada uno de los puertos que se generan al realizar una conexión.

### 14. API HISTORY
Permite manipular el historial del navegador. El principal motivo de su uso es que, en páginas que no se vuelven a cargar, podamos generar un historial adecuado.
Esta API tiene una serie de métodos: back(), go(pasos), foward() y length (propiedad). Con HTML5 se han introducido nuevos métodos:
- window.history.pushState(estado,titulo,url). Permite añadir al historial y modificar la url de la página a la indicada.
- window.history.replaceState(estado,titulo,url). Igual que el anterior, pero reemplaza la url con la indicada.
- state: Es una propiedad que permite conocer el estado de la entrada actual. Para que no de null debe haberse dado de alta con pushState
- popstate: Este evento se lanzará cada vez que se cambia de página en el navegador.

Ej: [página que añade una url falsa para navegar](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/api-history.html)

### 15. API OFFLINE
Nos permite trabajar sin conexión a internet. Se consigue mediane un archivo manifesto, que tiene extensión .manifest, que no es mas que un archivo de texto con todos los ficheros que queremos almacenar en la caché. Si la conexión se pierde podrá, por tanto, usar estos ficheros.
Un fichero .manifest debe:
- Empezar con la categoría CACHE MANIFEST. Los ficheros que se pongan debajo, se almacenarán en la caché del ordenador.
- Puede tener la categoría NETWORK. Debajo aparecerán los archivos que queremos que funcionen con conexión.
- Puede tener una categoría FALLBACK. Debajo aparecerán los archivos que funcionan con conexión pero, si no hay conexión, se tira de caché

1. Objeto window.aplicationCache. Eventos:
- error
- checking: se dispara cuando se comprueba si hay actualizaciones
- noupdate: se dispara cuando no se encuentran actualizaciones en el manifesto
- downloading: se dispara cuando hay un cambio y empieza la descarga.
- cached: se dispara cuando la caché está preparada.
- updateready: se dispara cuando la actualización ha terminado.
- obsolete: se dispara cuando el archivo manifest ya no está disponible y la caché está siendo eliminada

Propiedad status: Muestra información sobre el proceso de descarga de los archivos del manifesto.

Para indicar a la página el archivo manifesto, se debe indicar en el atributo manifest de la etiqueta HTML

Desde la versión 84/85 de Chrome. Esto ya no funciona.

Ej: [página con manifest](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/api-offline.html)
