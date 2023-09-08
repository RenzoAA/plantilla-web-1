import navBar from "./doom/navbar.js";
import scrollBtn from "./doom/btnScroll.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    navBar('.hamburger-box','.nav-principal','.header__content');
    scrollBtn('.btn-scroll');
})