const images = [
    "images/particulas/a.png",
    "images/particulas/e.png",
    "images/particulas/i.png",
    "images/particulas/o.png",
    "images/particulas/u.png",
    "images/particulas/unoT.png",
    "images/particulas/dosT.png",
    "images/particulas/tresT.png",
    "images/particulas/cuatroT.png",
    "images/particulas/cincoT.png",
    "images/particulas/seisT.png",
    "images/particulas/sieteT.png",
    "images/particulas/ochoT.png",
    "images/particulas/nueveT.png",
    "images/particulas/diezT.png",
    "images/particulas/int.png",
];

const container = document.getElementById("particles");

function createParticle() {
    const el = document.createElement("img"); // Cambiado a imagen
    el.src = images[Math.floor(Math.random() * images.length)]; // Elegir imagen al azar
    el.classList.add("particle");

    // Posición horizontal aleatoria
    el.style.left = Math.random() * 100 + "vw";

    // Tamaño aleatorio
    const size = 50 + Math.random() * 80; // entre 30px y 80px
    el.style.width = size + "px";
    el.style.height = "auto";

    // Animación
    el.style.animationDuration = (8 + Math.random() * 5) + "s"; // tiempo de caída
    el.style.animationDelay = Math.random() * 5 + "s"; // retraso aleatorio

    container.appendChild(el);

    // Elimina la imagen después de la animación
    setTimeout(() => {
        el.remove();
    }, 40000); // mayor que animationDuration para asegurarse de que termine
}

// Genera constantemente partículas
setInterval(createParticle, 2000); // cada 0.5s aparece una nueva imagen