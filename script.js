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

    function mostrarInfo(tipo) {
        let infoDiv = document.getElementById("info");
        infoDiv.setAttribute("data-tipo", tipo);
    
        if (tipo === "cast") {
            infoDiv.innerHTML = "<b>Reparto principal:</b><br> - Johnny Depp como Victor Van Dort<br> - Helena Bonham Carter como Emily, la Novia Cadáver<br> - Emily Watson como Victoria Everglot<br> - Albert Finney como Finis Everglot<br> - Richard E. Grant como Barkis Bittern<br> - Christopher Lee como el Pastor Galswells";
        } else if (tipo === "guion") {
            infoDiv.innerHTML = "<b>Guionistas:</b><br> - John August<br> - Caroline Thompson<br> - Pamela Pettler";
            
        } else if (tipo === "Directores") {
            infoDiv.innerHTML = "<b>Directores:</b><br> - Tim Burton<br> - Mike Johnson<br>";
            
        }
        
    }
    new Swiper('.card-wrapper-nuestrosservicios', {

        loop: true,
        spaceBetween: 30,

        // Pagination bullets
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        }
    });    
});
