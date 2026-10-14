// ================================
// MUSIC
// ================================

const music = document.getElementById("bgMusic");

function startJourney() {

    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });

    music.play().catch(() => {
        console.log("Music needs user interaction.");
    });
}


function toggleMusic() {

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}


// ================================
// LOVE LETTER
// ================================

function openLetter() {

    document.getElementById("letter").classList.add("show");
}


function closeLetter() {

    document.getElementById("letter").classList.remove("show");
}


// ================================
// BIRTHDAY GIFT
// ================================

function openGift() {

    const message = document.getElementById("surpriseMessage");

    message.classList.add("show");

    createHearts();

    setTimeout(() => {
        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 300);
}


// ================================
// FLOATING HEARTS
// ================================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💕", "💗", "💖", "💘"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}


function createHearts() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
}


// Create hearts continuously

setInterval(createHeart, 1200);