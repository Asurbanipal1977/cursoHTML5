window.addEventListener("load", cargar, false);

function cargar()
{
    document.getElementById("grabar").addEventListener("click",
     () => {
         const clave = document.getElementById("clave").value;
         const valor = document.getElementById("valor").value;

         sessionStorage.setItem(clave,valor);

         mostrarSessionStorage(clave);
     }, false)
}

function mostrarSessionStorage(clave)
{
    document.getElementById("zonadatos").innerHTML = sessionStorage.getItem(clave);
}