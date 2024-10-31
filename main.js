
let currentSlide = 0;
const slides = document.querySelectorAll('main section');
const slideCountDisplay = document.getElementById('slide-count');

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
  slideCountDisplay.textContent = `Slide ${currentSlide + 1} of ${slides.length}`;
}

document.getElementById('next-slide').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

document.getElementById('previous-slide').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});

updateSlide(); // Initial display





