/* JS Code, der nur auf der Start Page verwendet wird */
let currentIndex = 0;

function showSlides(index) {
  const slides = document.querySelectorAll('.image-gallery img');
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${offset}%)`;
  });

  // Bildname aktualisieren
  const currentImageName = slides[currentIndex].alt;
  document.getElementById('current-image-name').innerText = currentImageName;
}

function nextSlide() {
  showSlides(currentIndex + 1);
}

function prevSlide() {
  showSlides(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides(currentIndex);
});
