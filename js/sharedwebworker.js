var puertos = new Array();

addEventListener("connect",procesar,false);

function procesar(e)
{
    puertos.push(e.ports[0]);

    //Se pone el puerto a la escucha del evento mensaje(no vale addEventListener)
    e.ports[0].onmessage = enviar;
}

function enviar(e)
{
    for (puerto of puertos)
    {
        puerto.postMessage(`El texto que se ha puesto es: ${e.data}`);
    }
}

