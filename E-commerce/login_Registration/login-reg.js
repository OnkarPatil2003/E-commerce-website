let button_signup = document.querySelector("#signup");
let click_close = document.querySelector(".close");
let div_anime = document.querySelector(".sec1-div1");
let div_reverseflix = document.querySelector(".sec1-div");
let div_hide = document.querySelector(".sec1-div2");
let div_display = document.querySelector(".sec1-div3");

button_signup.addEventListener("click",(e)=>{
    div_hide.style.display = "none";
    div_display.style.display = "block";
    div_reverseflix.classList.add("sec1-div-reverse");
    div_anime.classList.remove("myanimation_reverse")
    div_anime.classList.add("myanimation")
})
click_close.addEventListener("click",(e)=>{
    div_hide.style.display = "block";
    div_display.style.display = "none";
    div_reverseflix.classList.remove("sec1-div-reverse");
    div_anime.classList.remove("myanimation")
    div_anime.classList.add("myanimation_reverse")
})