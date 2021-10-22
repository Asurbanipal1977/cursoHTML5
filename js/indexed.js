var bd;
window.addEventListener("load",iniciar,false);

function iniciar()
{
    var zd = document.getElementById("zonadatos");
    var boton = document.getElementById("grabar");
    boton.addEventListener("click", grabarClave ,false);

    /** @type {IDBOpenDBRequest} */
    var solicitud = indexedDB.open("miBD");

    //Para crear la base de datos
    solicitud.onsuccess = (e) => {
        bd = e.target.result; //Se almacena la base de datos en la variable bd
        mostrarContenido();
    }

    //Si la base de datos necesita actualizarse
    solicitud.onupgradeneeded = (e) => {
        bd = e.target.result;
        bd.createObjectStore("gente",{keyPath: "clave"}); //Se indica el nombre de la tabla y se indica el campo clave
    }

}

function grabarClave()
{
    var clave = document.getElementById("clave").value;
    var titulo = document.getElementById("texto").value;
    var fecha = document.getElementById("fecha").value;

    //almacena la transacción de lectura y escritura
    var almacen = bd.transaction("gente","readwrite").objectStore("gente"); 
    var agregar = almacen.add({clave: clave, titulo: titulo, fecha: fecha});

    agregar.addEventListener("success",mostrarContenido,false);

    document.getElementById("form1").reset();
}

function mostrarContenido()
{
    var zonadatos = document.getElementById("zonadatos");
    zonadatos.innerHTML = "";
    var cursor = bd.transaction("gente","readonly").objectStore("gente").openCursor(); 
    cursor.addEventListener("success",(e) => {
       let cursor = e.target.result;
       if (cursor)
       {
          zonadatos.innerHTML+="<div>"+JSON.stringify(cursor.value)+"</div>";
          cursor.continue(); //Para avanzar el cursor
       }
    },false);
}