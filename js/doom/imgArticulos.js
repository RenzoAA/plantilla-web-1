const d = document;
export default function imgArticulos(imagenArticulo,bannerBg){
    const $imgArticulo = d.querySelector(imagenArticulo),
    $bannerBg = d.querySelector(bannerBg);
    console.log($bannerBg)
    addEventListener('resize',()=>{
        if(innerWidth < 768) {
            $bannerBg.style.backgroundImage = "url(../imagenes/plantilla-imagenes/articulo-mobile.jpg)";
            $imgArticulo.setAttribute("src", "../imagenes/plantilla-imagenes/articulo-mobile.jpg")
        }else if (innerWidth > 767 | innerWidth < 1199){
            $bannerBg.style.backgroundImage = "url(../imagenes/plantilla-imagenes/articulo-tablet.jpg)";
            $imgArticulo.setAttribute("src", "../imagenes/plantilla-imagenes/articulo-tablet.jpg")
        }
        if(innerWidth > 1200){
            $bannerBg.style.backgroundImage = "url(../imagenes/plantilla-imagenes/articulo-desktop.jpg)";
            $imgArticulo.setAttribute("src", "../imagenes/plantilla-imagenes/articulo-desktop.jpg")
        }
    })
    addEventListener('DOMContentLoaded',()=>{
        if(innerWidth < 767) {
            $bannerBg.style.backgroundImage = "url(../imagenes/plantilla-imagenes/articulo-mobile.jpg)";
            $imgArticulo.setAttribute("src", "../imagenes/plantilla-imagenes/articulo-mobile.jpg")
        }else if (innerWidth > 767 | innerWidth < 1199){
            $bannerBg.style.backgroundImage = "url(../imagenes/plantilla-imagenes/articulo-tablet.jpg)";
            $imgArticulo.setAttribute("src", "../imagenes/plantilla-imagenes/articulo-tablet.jpg")
        }
        if(innerWidth > 1200){
            $bannerBg.style.backgroundImage = "url(../imagenes/plantilla-imagenes/articulo-desktop.jpg)";
            $imgArticulo.setAttribute("src", "../imagenes/plantilla-imagenes/articulo-desktop.jpg")
        }
    })
}