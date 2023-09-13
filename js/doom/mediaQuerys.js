const d = document;
export default function mediaQuerys(img1,img2,img3) {
    const $imgSlider1 = d.querySelector(img1),
    $imgSlider2 = d.querySelector(img2),
    $imgSlider3 = d.querySelector(img3);
    addEventListener('resize', () => {
        if (innerWidth > 767) {
            $imgSlider1.setAttribute("src", "imagenes/plantilla-imagenes/banner-1280-1280.jpg")
            $imgSlider2.setAttribute("src", "imagenes/plantilla-imagenes/banner-1280-1280.jpg")
            $imgSlider3.setAttribute("src", "imagenes/plantilla-imagenes/banner-1280-1280.jpg")
        }else if(innerWidth < 768){
            $imgSlider1.setAttribute("src", "imagenes/plantilla-imagenes/imagen-1280-1700.jpg")
            $imgSlider2.setAttribute("src", "imagenes/plantilla-imagenes/imagen-1280-1700.jpg")
            $imgSlider3.setAttribute("src", "imagenes/plantilla-imagenes/imagen-1280-1700.jpg")
        }else if(innerWidth > 1199){
            $imgSlider1.setAttribute("src", "imagenes/plantilla-imagenes/banner-1920-1080.jpg")
            $imgSlider2.setAttribute("src", "imagenes/plantilla-imagenes/banner-1920-1080.jpg")
            $imgSlider3.setAttribute("src", "imagenes/plantilla-imagenes/banner-1920-1080.jpg")
        }else if(innerWidth < 1200){
            $imgSlider1.setAttribute("src", "imagenes/plantilla-imagenes/banner-1280-1280.jpg")
            $imgSlider2.setAttribute("src", "imagenes/plantilla-imagenes/banner-1280-1280.jpg")
            $imgSlider3.setAttribute("src", "imagenes/plantilla-imagenes/banner-1280-1280.jpg")
        }
    })

    addEventListener("DOMContentLoaded",()=>{
        if (innerWidth > 767) {
            $imgSlider1.setAttribute("src", "imagenes/plantilla-imagenes/banner-1280-1280.jpg")
            $imgSlider2.setAttribute("src", "imagenes/plantilla-imagenes/banner-1280-1280.jpg")
            $imgSlider3.setAttribute("src", "imagenes/plantilla-imagenes/banner-1280-1280.jpg")
        }else if(innerWidth < 768){
            $imgSlider1.setAttribute("src", "imagenes/plantilla-imagenes/imagen-1280-1700.jpg")
            $imgSlider2.setAttribute("src", "imagenes/plantilla-imagenes/imagen-1280-1700.jpg")
            $imgSlider3.setAttribute("src", "imagenes/plantilla-imagenes/imagen-1280-1700.jpg")
        }else if(innerWidth > 1199){
            $imgSlider1.setAttribute("src", "imagenes/plantilla-imagenes/banner-1920-1080.jpg")
            $imgSlider2.setAttribute("src", "imagenes/plantilla-imagenes/banner-1920-1080.jpg")
            $imgSlider3.setAttribute("src", "imagenes/plantilla-imagenes/banner-1920-1080.jpg")
        }else if(innerWidth < 1200){
            $imgSlider1.setAttribute("src", "imagenes/plantilla-imagenes/banner-1280-1280.jpg")
            $imgSlider2.setAttribute("src", "imagenes/plantilla-imagenes/banner-1280-1280.jpg")
            $imgSlider3.setAttribute("src", "imagenes/plantilla-imagenes/banner-1280-1280.jpg")
        }
    })
}