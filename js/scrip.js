// Esperar a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    let index = 0;
    const musicButton = document.querySelector('.music-button');
    const audio = new Audio('./img/Gina Flores - original sound - ginaflores19.mp3'); // Ruta del archivo de música

    // Hacer que la música se repita
    audio.loop = true;

    // Función para mostrar la siguiente diapositiva
    function showNextSlide() {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }

    // Reproducir o pausar la música al hacer clic en el botón
    musicButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicButton.textContent = "Pausar Música";
        } else {
            audio.pause();
            musicButton.textContent = "Reproducir Música";
        }
    });

    // Configura el carrusel para que cambie cada 5 segundos
    setInterval(showNextSlide, 5000);
});
