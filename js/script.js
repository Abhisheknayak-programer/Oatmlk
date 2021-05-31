// Up Arrow Function
const Arrow = document.querySelector(".ArrowBtn");
const nav = document.querySelector("nav");

Arrow.addEventListener("click",()=>{
    nav.scrollIntoView({
        behavior : "smooth"
    })
})