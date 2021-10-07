var mivideo, reproducir, barra, progreso;

function comenzar()
{
    mivideo=document.getElementById("mivideo");
    reproducir=document.getElementById("reproducir");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");

    reproducir.addEventListener("click",() => {
        if (mivideo.paused || mivideo.ended)
        {
            mivideo.play();
            reproducir.innerHTML="Pause";
        }
        else
        {
            mivideo.pause(); 
            reproducir.innerHTML="Play";
        }       
    }, false);

    mivideo.addEventListener("ended", () => {reproducir.innerHTML="Play"}, false)

    progreso.addEventListener("click",() => {
        
    }, false);
}

window.addEventListener("load",comenzar,false);