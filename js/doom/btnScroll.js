const d = document,
w = window;
export default function scrollBtn(btn){
    const $scrollBtn = d.querySelector(btn);
    d.addEventListener("click", e =>{
        if(e.target.matches(btn)|| e.target.matches(`${btn} *`)){
            w.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    })
}