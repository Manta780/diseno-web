document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const images = document.querySelectorAll('.carousel img');
    let index = 0;
    const totalImages = images.length;
    let autoSlide;
    let botones = document.querySelectorAll(".btn");

    botones.forEach(boton => {
        boton.addEventListener("click", function () {
            let tipo = this.getAttribute("data-tipo");

            // Si el contenido mostrado es el mismo, lo oculta
            if (infoDiv.getAttribute("data-tipo") === tipo) {
                infoDiv.innerHTML = "";
                infoDiv.removeAttribute("data-tipo");
            } else {
                mostrarInfo(tipo);
            }
        });
    });

    function updateCarousel() {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function nextImage() {
        index = (index + 1) % totalImages;
        updateCarousel();
    }

    function prevImage() {
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextImage, 3000); // Cambia cada 3s
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }
    nextBtn.addEventListener("click", () => {
        stopAutoSlide();
        nextImage();
        startAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        stopAutoSlide();
        prevImage();
        startAutoSlide();
    });

    startAutoSlide();
});
