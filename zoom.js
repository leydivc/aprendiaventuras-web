const overlay = document.getElementById("zoomOverlay");

document.querySelectorAll(".zoom-img").forEach(img => {
    img.addEventListener("click", () => {
        const clone = img.cloneNode();

        // estilos iniciales (posición original)
        const rect = img.getBoundingClientRect();
        clone.style.position = "fixed";
        clone.style.top = rect.top + "px";
        clone.style.left = rect.left + "px";
        clone.style.width = rect.width + "px";
        clone.style.height = rect.height + "px";
        clone.style.transition = "all 0.4s ease";
        clone.style.zIndex = "60";
        clone.style.objectFit = "cover";
        clone.style.borderRadius = "12px";

        overlay.innerHTML = "";
        overlay.appendChild(clone);
        overlay.style.display = "flex";

        // animación hacia el centro
        setTimeout(() => {
            clone.style.top = "50%";
            clone.style.left = "50%";
            clone.style.transform = "translate(-50%, -50%) scale(1.8)";
        }, 10);

        // cerrar
        overlay.onclick = () => {
            clone.style.top = rect.top + "px";
            clone.style.left = rect.left + "px";
            clone.style.transform = "scale(1)";

            setTimeout(() => {
                overlay.style.display = "none";
            }, 300);
        };
    });
});