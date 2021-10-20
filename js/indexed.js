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
    almacen.add({clave: clave, titulo: titulo, fecha: fecha});

    document.getElementById("form1").reset();
}