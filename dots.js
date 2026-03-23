function initDots(carouselId, dotsContainerId) {
    const carousel = document.getElementById(carouselId);
    const dotsContainer = document.getElementById(dotsContainerId);
    const items = carousel.querySelectorAll('.carousel-item');

    // Crear los dots
    items.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            carousel.scrollTo({
                left: index * carousel.clientWidth,
                behavior: 'smooth'
            });
        });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    // Detectar el item visible
    function updateDots() {
        const scrollIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);
        dots.forEach(dot => dot.classList.remove('active'));
        if(dots[scrollIndex]) dots[scrollIndex].classList.add('active');
    }

    carousel.addEventListener('scroll', () => {
        requestAnimationFrame(updateDots);
    });

    // Inicializar el primer dot activo
    updateDots();
}

// Inicializa todos los carruseles
initDots('carousel-vocales', 'dots-carousel-vocales');
initDots('carousel-numeros', 'dots-carousel-numeros');
initDots('carousel-fyc', 'dots-carousel-fyc');