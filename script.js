document.addEventListener("DOMContentLoaded", () => {
    // Matrix Rain Effect Setup
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix Characters
    const matrixChars = "*StephanieDugas*saguDeinahpetS*";
    const chars = matrixChars.split("");
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    // Draw Matrix Rain
    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0F0"; // Green text
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);

    // Resize canvas when window resizes
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Typing Effect
    const text = "Hi, I'm Stephanie Dugas!";
    let index = 0;

    function typeEffect() {
        document.querySelector(".glow-text").textContent = text.slice(0, index);
        index++;
        if (index <= text.length) {
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();

    // Navbar Hide on Scroll
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY < lastScrollY) {
            navbar.style.top = "0";
        } else {
            navbar.style.top = "-70px";
        }
        lastScrollY = window.scrollY;
    });
});