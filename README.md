# Curso de HTML 5
1. ¿Qué es HTML5?  
Es un estándar que engloba a tres tecnologías: HTML (Estructura), CSS (Apariencia) y Javascript (Interactividad)

2. Etiquetas importantes
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
    ```
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
    
    ```html
<html>
  <head>
  </head>
</html>
```  
    
    3. Figure y figcaption
    - Figure: Se utiliza para insertar elementos que tiene que ver con el contenido. Pueden ser imágenes, video, ... Dentro de las imágenes que se admiten están las gif, jpg y png. Las gifs tienen como mucho 256 colores y tanbto gif como png admite transparencia.
    - Figcaption: Tiene la descripción de la imagen
    - 
    
