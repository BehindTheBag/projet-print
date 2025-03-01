const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsIndicator = document.querySelector(".dots"); 



let activeSlide = 0; // slide actuel



// affichage du slide
function updateSlide() {
    bannerImg.src = `./assets/images/slideshow/${slides[activeSlide].image}`;
    bannerText.innerHTML = slides[activeSlide].tagLine;
}

// maj indicateurs
function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === activeSlide) {
            dot.classList.add("dot_selected"); 
        } else {
            dot.classList.remove("dot_selected"); 
        }
    });
}

// création indicateur
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    dot.addEventListener("click", () => {
        activeSlide = i; // Changer de slide en fonction du point cliqué
        updateSlide();
        updateDots();
    });

    dotsIndicator.appendChild(dot); 
}

// flèche gauche
arrowLeft.addEventListener("click", () => {
    if (activeSlide === 0) {
        activeSlide = slides.length - 1; // Revenir au dernier slide
    } else {
        activeSlide--; // Passer au slide précédent
    }
    updateSlide();
    updateDots();
});

// flèche droite
arrowRight.addEventListener("click", () => {
    if (activeSlide === slides.length - 1) {
        activeSlide = 0; // Revenir au premier slide
    } else {
        activeSlide++; // Passer au slide suivant
    }
    updateSlide();
    updateDots();
});