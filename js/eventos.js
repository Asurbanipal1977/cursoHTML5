function cargarPagina()
{
    for (const p of document.querySelectorAll("p"))
    {
        p.addEventListener("click", () => {alert("Es un parrafo muy bonito")}, true);
    }

    for (const img of document.querySelectorAll("img"))
    {
        img.addEventListener("click", () => {alert("Es una flor muy bonita")}, false);
        img.addEventListener("mouseover", () => {img.width=225; img.height=225}, false);
        img.addEventListener("mouseout", () => {img.width=200; img.height=200}, false);
    }
}

window.addEventListener("load",() => cargarPagina(),false);