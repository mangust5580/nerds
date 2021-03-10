let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlide() {
    showSlides(slideIndex += 1);
}

let timerId = setInterval(function() {
 plusSlide()
}, 6000);


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider__slide");
    let dots = document.getElementsByClassName("slider__dots-item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slider__dots--active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " slider__dots--active";
}
