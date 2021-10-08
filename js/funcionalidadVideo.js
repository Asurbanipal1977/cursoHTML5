var mivideo, miaudio, mimedia, reproducir, barra, progreso;
const maximo = 600;

function comenzar()
{
    if (document.getElementById("mivideo")!=null)
        mimedia=document.getElementById("mivideo");
    else
        mimedia=document.getElementById("miaudio");

    reproducir=document.getElementById("reproducir");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");

    reproducir.addEventListener("click",() => {
        if (mimedia.paused || mimedia.ended)
        {
            mimedia.play();
            reproducir.innerHTML="Pause";

            setInterval(estado,100);
        }
        else
        {
            mimedia.pause(); 
            reproducir.innerHTML="Play";
        }       
    }, false);

    mimedia.addEventListener("ended", () => {reproducir.innerHTML="Play"}, false);

    barra.addEventListener("click",(posicion) => {
        //if (!mimedia.paused && !mimedia.ended)
        //{
            var ratonX = posicion.pageX-barra.offsetLeft;
            var nuevoTiempo = (ratonX*mimedia.duration) / maximo;
            
            mimedia.currentTime = nuevoTiempo;
            progreso.style.width = ratonX + "px";
        //}


    }, false);
}

function estado()
{
    if (!mimedia.ended)
    {
        var total = parseInt((mimedia.currentTime*maximo)/mimedia.duration,10);

        progreso.style.width=total+"px";
    }
}


window.addEventListener("load",comenzar,false);