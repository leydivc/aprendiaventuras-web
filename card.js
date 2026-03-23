const cards = document.querySelectorAll('.card-animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); // 👈 clave para reactivar
        }
    });
}, {
    threshold: 0.2
});

cards.forEach((card) => {
    observer.observe(card);
});