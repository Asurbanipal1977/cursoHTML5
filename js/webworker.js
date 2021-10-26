addEventListener("message",procesar,false);

function procesar(e)
{
    var respuesta = `El texto escrito en el campo es: ${e.data}`;
    postMessage(respuesta);
}