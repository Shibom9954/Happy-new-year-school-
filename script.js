// --- BACKGROUND FIREWORKS LOGIC ---
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.02;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.2) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function autoFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    for (let i = 0; i < 20; i++) {
        particles.push(new Particle(x, y, color));
    }
}

function animate() {
    ctx.fillStyle = 'rgba(5, 5, 26, 0.2)'; // Fades the tail
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    if (Math.random() < 0.05) autoFirework();
    requestAnimationFrame(animate);
}
animate();

// --- BUTTON CELEBRATION LOGIC ---
document.getElementById('celebrateBtn').addEventListener('click', () => {
    // This creates the explosion of colorful paper (Confetti)
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#ffffff', '#ff4757', '#2f3542']
    });
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
        }
    }
}

function autoFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const color = `hsl(${Math.random() * 360}, 100%, 60%)`;
    for (let i = 0; i < 20; i++) {
        particles.push(new Particle(x, y, color));
    }
}

function animate() {
    ctx.fillStyle = 'rgba(2, 2, 10, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    if (Math.random() < 0.05) autoFirework();
    requestAnimationFrame(animate);
}
animate();

document.getElementById('celebrateBtn').addEventListener('click', () => {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
