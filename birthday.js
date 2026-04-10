let friendName = prompt("Enter your bestie's name 💖") || "My Bestie 💕";

document.getElementById("title").innerHTML =
    `Happy Birthday ${friendName} 🎂💖`;

document.getElementById("mainMessage").innerHTML =
    `To my good girl ${friendName} 💕<br>
    You make my life brighter and happier ✨`;

document.getElementById("message").innerHTML =
    `I love you sooo much ${friendName} 💕🥹`;

document.getElementById("cakeName").innerHTML = friendName;

/* 🎁 Button click */
function showMessage() {
    document.getElementById("message").style.display = "block";
    createConfetti();
    startFireworks();
}

/* 🎊 Confetti */
function createConfetti() {
    const colors = ["#ff4d88", "#ffd166", "#06d6a0", "#118ab2", "#ff85a1"];

    for (let i = 0; i < 80; i++) {
        const c = document.createElement("div");
        c.classList.add("confetti");

        c.style.left = Math.random() * 100 + "vw";
        c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        c.style.animationDuration = (Math.random() * 3 + 2) + "s";

        document.body.appendChild(c);
        setTimeout(() => c.remove(), 5000);
    }
}

/* 🎆 Fireworks */
function createFirework(x, y) {
    const colors = ["#ff4d88", "#ffd166", "#06d6a0", "#118ab2", "#ffffff"];

    for (let i = 0; i < 30; i++) {
        const fw = document.createElement("div");
        fw.classList.add("firework");

        fw.style.left = x + "px";
        fw.style.top = y + "px";
        fw.style.background = colors[Math.floor(Math.random() * colors.length)];

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 100;

        fw.style.transform =
            `translate(${Math.cos(angle)*distance}px, ${Math.sin(angle)*distance}px)`;

        document.body.appendChild(fw);
        setTimeout(() => fw.remove(), 1000);
    }
}

function startFireworks() {
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight / 2;
        createFirework(x, y);
    }, 800);
}

/* 💨 Blow candles */
function blowCandles() {
    document.querySelectorAll(".flame").forEach(f => f.classList.add("off"));
    document.body.classList.add("dimmed");
    startSparkles();

    setTimeout(() => {
        alert("Make a wish 💖✨");
    }, 500);
}

/* ✨ Sparkles */
function startSparkles() {
    setInterval(() => {
        const s = document.createElement("div");
        s.classList.add("sparkle");

        s.style.left = Math.random() * 100 + "vw";
        s.style.top = Math.random() * 100 + "vh";
        s.style.animationDuration = (Math.random() * 2 + 1) + "s";

        document.body.appendChild(s);
        setTimeout(() => s.remove(), 2000);
    }, 150);
}

/* 💖 Hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);