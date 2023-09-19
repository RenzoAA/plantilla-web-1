document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const videos = slider.querySelectorAll("video");

    let currentSlide = 0;

    function playNextVideo() {
        videos[currentSlide].pause();
        videos[currentSlide].currentTime = 0;
        currentSlide = (currentSlide + 1) % videos.length;
        videos[currentSlide].play();
    }

    videos[currentSlide].play();

    setInterval(playNextVideo, 5000); // Cambiar de video cada 5 segundos
});