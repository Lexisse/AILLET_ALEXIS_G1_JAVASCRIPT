//Pour le slider

document.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper(".mon-slider", {
        navigation : {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev"
        },
        pagination: {
        el : ".swiper-pagination",
        },
        autoplay : {
            delay : 3000
        }
    })
})

//Pour le dark mode

let darkMode = document.getElementById("darkMode")
let darkBande = document.querySelector("header")
let darkBody = document.querySelector(".bodypage")
let darkFoot = document.querySelector(".downpage")

darkMode.addEventListener("click", function() {
    darkBande.classList.add("dark1")
    darkBody.classList.add("dark2")
    darkFoot.classList.add("dark3")
})