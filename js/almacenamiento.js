var cache = localStorage;

window.addEventListener("load", cargar, false);

function cargar()
{
    document.getElementById("grabar").addEventListener("click",grabarClaves , false);
}

function grabarClaves () {
    const clave = document.getElementById("clave").value;
    const valor = document.getElementById("valor").value;

    cache.setItem(clave,valor);
    mostrarClaves();

    document.getElementById("clave").value = "";
    document.getElementById("valor").value = "";
}


function mostrarClaves()
{
    document.getElementById("zonadatos").innerHTML ="";

    for(var i = 0; i < cache.length; i++){
          let clave = cache.key(i);

          let div = document.createElement("span");
          div.innerHTML = "Clave:" + clave + "- contenido:" + cache.getItem(clave) + "&nbsp";
          document.getElementById("zonadatos").appendChild(div);

          let boton = document.createElement("button");
          boton.innerHTML = "Eliminar";
          boton.onclick=() => 
          {
             eliminarClave(clave);
          }
          document.getElementById("zonadatos").appendChild(boton);

          let br = document.createElement("br");
          let hr = document.createElement("hr");
          document.getElementById("zonadatos").appendChild(br).appendChild(hr);          
    }

    //Se crea el botón eliminar todo
    let boton = document.createElement("button");
    boton.innerHTML = "Eliminar todo";
    boton.onclick=() => 
    {
       eliminarClaves()
    }
    document.getElementById("zonadatos").appendChild(boton);
}

function eliminarClave(clave)
{
    if (confirm("Estás seguro?"))
    {
      cache.removeItem(clave);
      mostrarClaves();
    }
}

function eliminarClaves()
{
    if (confirm("Estás seguro?"))
    {
      cache.clear();
      mostrarClaves();
    }
}