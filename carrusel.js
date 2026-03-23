function scrollCarousel(id, direction) {
    const container = document.getElementById(id);
    const scrollAmount = container.clientWidth;

    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}