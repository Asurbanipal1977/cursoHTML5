window.addEventListener("load", cargar, false);

function cargar()
{
    var zonamensajes=document.getElementById("zonamensajes");
    zonamensajes.innerHTML = "Estas en la página 1";

	var cache = window.applicationCache;

    cache.addEventListener("error",function(e){
        alert("No se puede descargar");
    },false);

    cache.addEventListener("updateready",function(){
        alert("Descarga realizada");
    },false);

}