# Curso de HTML 5
### 1. ¿Qué es HTML5?  
Es un estándar que engloba a tres tecnologías: HTML (Estructura), CSS (Apariencia) y Javascript (Interactividad)

Para indicar qué una página está en HTML 5 se coloca la cabecera 
\<!DOCTYPE html\>

Para no tener que concatenar se usa:
`${nombre de la variable}`;

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
 1 - querySelector("") : Retorna el primer elemento que corresponde al grupo de selectores indicados entre comillas.
 2 - querySelectorAll("") : Retorna todos los elementos que corresponde al grupo de selectores indicados entre comillas.
 3 - addEventListener(evento, funcion, boolean): Permite añadir un evento a un elemento.
 4 - Array dinámico:
 
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
- **readAsBinaryString**: Devuelve la información de cada byte como si fuera una sucesión de números entre 0-255. Sirve para mover archivos de un lado a otro, mostrar imagenes que se hasn leido de un fichero.
- **readAsDataURL**: Nos devuelve el archivo como una cadena de tipo url codificado en base 64. Para enviar información cifrada.
- **readArrayAsBuffer**: Devuelve la información como un array en formato binario.

El objeto file tiene estas propiedades principales: name, size y type.

ej:  [prueba-file.html](https://github.com/Asurbanipal1977/cursoHTML5/blob/main/prueba-file.html)
