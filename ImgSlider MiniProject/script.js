const slides = document.querySelectorAll(".slides img");
let slideInd = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded",initializeSlider);
function initializeSlider(){
    if(slides.length > 0){
        slides[slideInd].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 3000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideInd = 0;
    }
    else if(index < 0){
        slideInd = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideInd].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideInd--;
    showSlide(slideInd);
}

function nextSlide(){
    slideInd++;
    showSlide(slideInd);
}