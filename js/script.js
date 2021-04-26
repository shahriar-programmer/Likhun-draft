const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", ()=>{
    nav.classList.toggle("show-nav");
    console.log("Clicked");
})