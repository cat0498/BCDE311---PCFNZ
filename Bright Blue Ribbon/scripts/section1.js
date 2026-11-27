const carousel = document.getElementById("article-carousel");
const previousButton = document.querySelector("[data-carousel-previous]");
const nextButton = document.querySelector("[data-carousel-next]");
const carouselStatus = document.querySelector(".article-carousel-status");

const slides = Array.from(carousel.querySelectorAll(".article-section"));
let currentSlide = 0;

function updateCarousel() {
    currentSlide = Math.round(carousel.scrollLeft / carousel.clientWidth);
    previousButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === slides.length - 1;
    carouselStatus.textContent = `Section ${currentSlide + 1} of ${slides.length}`;
}

function showSlide(index) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    carousel.scrollTo({
        left: index * carousel.clientWidth,
        behavior: reducedMotion ? "auto" : "smooth"
    });
}

previousButton.addEventListener("click", () => showSlide(Math.max(0, currentSlide - 1)));
nextButton.addEventListener("click", () => showSlide(Math.min(slides.length - 1, currentSlide + 1)));
carousel.addEventListener("scroll", updateCarousel, { passive: true });
window.addEventListener("resize", updateCarousel);

updateCarousel();
