# Curso de HTML 5
### 1. ¿Qué es HTML5?  
Es un estándar que engloba a tres tecnologías: HTML (Estructura), CSS (Apariencia) y Javascript (Interactividad)

### 2. Etiquetas importantes
- **header**: La cabecera.
- **nav**: Barra de navegación.
- **aside**: Barra lateral.
- **blockquote**: Se utiliza paera citas
- **article**: Se utiliza para englobar contenidos similares.
- **hgroup**: Se utilzia para englobar varios títulos.
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
  
  y los siguiente métodos:
       - play()
       - pause()
