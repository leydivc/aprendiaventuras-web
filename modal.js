const botones = document.querySelectorAll(".abrirModal");
const modal = document.getElementById("miModal");
const closeBtn = document.querySelector(".close");
const navLinks = document.querySelectorAll("nav a");

// Abrir modal con cualquier botón
botones.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    bloquearNav();
  });
});

// Cerrar modal
function cerrarModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  activarNav();
}

function bloquearNav() {
  navLinks.forEach(link => {
    link.style.pointerEvents = "none";
  });
}

function activarNav() {
  navLinks.forEach(link => {
    link.style.pointerEvents = "auto";
  });
}

closeBtn.addEventListener("click", cerrarModal);