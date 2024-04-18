let dayNight=document.querySelector(".dayNight");
let banner=document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let  typingef=new Typed("#text",{
    strings:["Coder"],
    loop:true,
    typeSpeed:100,
    backSpeed:200,
    backDelay:1000
})