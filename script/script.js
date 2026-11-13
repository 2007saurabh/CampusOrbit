document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById('eventCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const scrollAmount = 300; 

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
});