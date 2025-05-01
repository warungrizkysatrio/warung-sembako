
document.addEventListener("DOMContentLoaded", () => {
  const animated = document.querySelectorAll('.header, .hero-overlay, .gallery, .about, .contact');
  animated.forEach(el => el.style.animation = "fadeSlide 1s ease forwards");
});
