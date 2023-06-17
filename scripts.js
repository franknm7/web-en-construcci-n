// Toggle de menú responsive
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
    menu.style.display = "none";
    } else {
    menu.style.display = "block";
    }
    }
    
    // Evento de escucha para el botón de menú
    var btn = document.getElementById("menu-toggle");
    btn.addEventListener("click", toggleMenu);
    
    // Desplazamiento de anclajes suaves (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
    });
    });
    });