const d = document;
export default function imgArticulos(imagenArticulo){
    const $imgArticulo = d.querySelector(imagenArticulo)
    console.log('hola')
    addEventListener('resize',()=>{
        if(innerWidth < 767) {
            $imgArticulo.setAttribute("src", "../imagenes/plantilla-imagenes/articulo-mobile.jpg")
        }else if (innerWidth > 768){
            $imgArticulo.setAttribute("src", "../imagenes/plantilla-imagenes/articulo-tablet.jpg")
        }else if (innerWidth < 1199){
            $imgArticulo.setAttribute("src", "../imagenes/plantilla-imagenes/articulo-tablet.jpg")
        }
        if(innerWidth > 1200){
            $imgArticulo.setAttribute("src", "../imagenes/plantilla-imagenes/articulo-desktop.jpg")
        }
    })
    addEventListener('DOMContentLoaded',()=>{
        if(innerWidth < 767) {
            $imgArticulo.setAttribute("src", "../imagenes/plantilla-imagenes/articulo-mobile.jpg")
        }else if (innerWidth > 768){
            $imgArticulo.setAttribute("src", "../imagenes/plantilla-imagenes/articulo-tablet.jpg")
        }else if (innerWidth < 1199){
            $imgArticulo.setAttribute("src", "../imagenes/plantilla-imagenes/articulo-tablet.jpg")
        }
        if(innerWidth > 1200){
            $imgArticulo.setAttribute("src", "../imagenes/plantilla-imagenes/articulo-desktop.jpg")
        }
    })
}