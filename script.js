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

    // Seleccionamos el navbar
const navbar = document.getElementById("navbar");

// Evento de scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled"); // Agrega la clase cuando se hace scroll
    } else {
        navbar.classList.remove("scrolled"); // Quita la clase si está arriba
    }
});

const entrenadores = [
    {
        nombre: "Gustavo Contreras - Entrenador personal",
        imagen: "images/entrenador1.jpg",
        descripcion: "Con 34 años de experiencia y pasión por el fitness, estoy aquí para guiarte en tu camino hacia una mejor versión de ti mismo. Mi objetivo es ayudarte a alcanzar tus metas de manera efectiva y segura, ofreciéndote asesoramiento personalizado y motivación constante."
    },
    {
        nombre: "Carlos Martínez - Especialista en fuerza",
        imagen: "images/entrenador2.jpg",
        descripcion: "Soy experto en levantamiento de pesas y acondicionamiento físico. Te ayudaré a mejorar tu fuerza, resistencia y técnica en el levantamiento de pesas."
    },
    {
        nombre: "Julio López - Entrenador funcional",
        imagen: "images/entrenador3.jpg",
        descripcion: "Apasionado por el entrenamiento funcional y la movilidad. Mis entrenamientos están diseñados para mejorar tu rendimiento y prevenir lesiones."
    }
];

// Hacer las funciones accesibles en el ámbito global
window.cambiarEntrenador = function(index) {
    document.getElementById("entrenador-img").src = entrenadores[index].imagen;
    document.getElementById("entrenador-nombre").textContent = entrenadores[index].nombre;
    document.getElementById("entrenador-descripcion").textContent = entrenadores[index].descripcion;
    document.getElementById("info-entrenador").innerHTML = ""; // Limpia la info adicional al cambiar de entrenador
};

window.mostrarInfo = function(tipo, boton) {
    // Obtener los divs de información
    let infoHorarios = document.getElementById("info-horarios");
    let infoContacto = document.getElementById("info-contacto");

    // Ocultar ambos cuadros antes de mostrar el nuevo
    infoHorarios.style.display = "none";
    infoContacto.style.display = "none";

    let infoDiv;
    if (tipo === "horarios") {
        infoDiv = infoHorarios;
        infoDiv.innerHTML = "<b>Horarios:</b><br>Lunes a Viernes: 6:00 AM - 10:00 PM<br>Sábados: 8:00 AM - 4:00 PM";
    } else if (tipo === "contacto") {
        infoDiv = infoContacto;
        infoDiv.innerHTML = "<b>Contacto:</b><br>Teléfono: +57 3205816622<br>Email: entrenador@gym.com";
    }

    // Si el cuadro ya estaba visible, ocultarlo
    if (infoDiv.style.display === "block") {
        infoDiv.style.display = "none";
    } else {
        infoDiv.style.display = "block";
    }
};
});
