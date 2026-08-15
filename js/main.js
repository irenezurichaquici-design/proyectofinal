document.addEventListener("DOMContentLoaded", () => {
    const checkBtn = document.getElementById("check");
    const menuLinks = document.querySelectorAll(".menu a");

    // Cerrar el menú desplegable móvil al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (checkBtn) {
                checkBtn.checked = false;
            }
        });
    });

    // Desplazamiento suave para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});