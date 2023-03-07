const left_handler = document.querySelector(".left-handler")
const right_handler = document.querySelector(".right-handler")

let left_isClicked = false, right_isClicked = false

let sources = ["../assets/Pic.png", "../assets/Pic-Left.png", "../assets/Pic-Right.png", "../assets/left.png", "../assets/left.gif", "../assets/right.png", "../assets/right.gif"]
let images = []

function preload(){
    for(var i=0; i<sources.length; ++i)
    {
        images[i] = new Image();
        images[i].src = sources[i]
    }
}

window.addEventListener("load", ()=>{
    preload()
    var img = document.querySelector("#portrait")
    img.src = images[0].src
    var left_handler = document.querySelector(".main-infodiv.infodiv-1");
    left_handler.style.backgroundImage = "url('" + images[5].src + "')";
    var right_handler = document.querySelector(".main-infodiv.infodiv-2");
    right_handler.style.backgroundImage = "url('" + images[3].src + "')";
})



left_pin_fill = () => {
    var left_pin = left_isClicked ? document.querySelectorAll(".bi-pin-angle") : document.querySelector(".bi-pin-angle-fill")
    if(left_isClicked) left_pin[0].className += "-fill"
    else left_pin.className = "bi bi-pin-angle"
}

right_pin_fill = () => {
    var right_pin = right_isClicked ? document.querySelectorAll(".bi-pin-angle") : document.querySelector(".bi-pin-angle-fill")
    if(right_isClicked) right_pin[1].className += "-fill"
    else right_pin.className = "bi bi-pin-angle"
}


left_infodivReveal = () => {
    var left_infodiv = document.querySelector(".infodiv-1")
    var right_infodiv = document.querySelector(".infodiv-2")
    var right_caption = document.querySelector(".hidden-caption-right .hidden-caption")
    var left_reveal_caption = document.querySelector(".hidden-caption-left .reveal-caption")
    var left_init_caption = document.querySelector(".hidden-caption-left .hidden-caption")
    var pin_left = document.querySelectorAll(".pin");
    var right_handler = document.querySelector(".right-handler")
    //var img = document.querySelector("#portrait")
    //img.src = images[1].src
    //
    right_handler.classList.add("hide")
    pin_left[0].classList.add("reveal")
    left_reveal_caption.classList.add("reveal")
    left_init_caption.classList.add("hidden")
    right_caption.classList.add("hidden")
    left_infodiv.classList.add("reveal")
    right_infodiv.classList.add("hidden")
    left_infodiv.style.backgroundImage = "url('" + images[6].src + "')";
}
    

left_infodivHide = () =>{
    var left_infodiv = document.querySelector(".infodiv-1")
    var right_infodiv = document.querySelector(".infodiv-2")
    var right_caption = document.querySelector(".hidden-caption-right .hidden-caption")
    var left_reveal_caption = document.querySelector(".hidden-caption-left .reveal-caption")
    var left_init_caption = document.querySelector(".hidden-caption-left .hidden-caption")
    var pin_left = document.querySelectorAll(".pin");
    var right_handler = document.querySelector(".right-handler")
    //var img = document.querySelector("#portrait")
    //img.src = images[0].src
    right_handler.classList.remove("hide")
    pin_left[0].classList.remove("reveal")
    left_reveal_caption.classList.remove("reveal")
    left_init_caption.classList.remove("hidden")
    right_caption.classList.remove("hidden")
    left_infodiv.classList.remove("reveal")
    right_infodiv.classList.remove("hidden")
    left_infodiv.style.backgroundImage = "url('" + images[5].src + "')";
}

right_infodivReveal = () =>{
    var right_infodiv = document.querySelector(".infodiv-2")
    var left_infodiv = document.querySelector(".infodiv-1")
    var left_caption = document.querySelector(".hidden-caption-left .hidden-caption")
    var right_reveal_caption = document.querySelector(".hidden-caption-right .reveal-caption")
    var right_init_caption = document.querySelector(".hidden-caption-right .hidden-caption")
    var pin_right = document.querySelectorAll(".pin");
    var left_handler = document.querySelector(".left-handler")
    //var img = document.querySelector("#portrait")
    //img.src = images[2].src
    left_handler.classList.add("hide")
    pin_right[1].classList.add("reveal")
    right_reveal_caption.classList.add("reveal")
    right_init_caption.classList.add("hidden")
    left_caption.classList.add("hidden")
    right_infodiv.classList.add("reveal")
    left_infodiv.classList.add("hidden")
    right_infodiv.style.backgroundImage = "url('" + images[4].src + "')";
}

right_infodivHide = () => {
    var right_infodiv = document.querySelector(".infodiv-2")
    var left_infodiv = document.querySelector(".infodiv-1")
    var left_caption = document.querySelector(".hidden-caption-left .hidden-caption")
    var right_reveal_caption = document.querySelector(".hidden-caption-right .reveal-caption")
    var right_init_caption = document.querySelector(".hidden-caption-right .hidden-caption")
    var pin_right = document.querySelectorAll(".pin");
    var left_handler = document.querySelector(".left-handler")
    //var img = document.querySelector("#portrait")
    //img.src = images[0].src
    left_handler.classList.remove("hide")
    pin_right[1].classList.remove("reveal")
    right_reveal_caption.classList.remove("reveal")
    right_init_caption.classList.remove("hidden")
    left_caption.classList.remove("hidden")
    right_infodiv.classList.remove("reveal")
    left_infodiv.classList.remove("hidden")
    right_infodiv.style.backgroundImage = "url('" + images[3].src + "')";
}

left_handler.addEventListener("mouseover", left_infodivReveal)
left_handler.addEventListener("click", ()=>{
    left_isClicked = !left_isClicked
    left_infodivReveal()
    left_pin_fill()
})

left_handler.addEventListener("mouseout", ()=>{
    if(!left_isClicked) left_infodivHide()
})

right_handler.addEventListener("mouseover", right_infodivReveal)
right_handler.addEventListener("click", ()=>{
    right_isClicked = !right_isClicked
    right_infodivReveal()
    right_pin_fill()
})

right_handler.addEventListener("mouseout", ()=>{
    if(!right_isClicked) right_infodivHide()
})