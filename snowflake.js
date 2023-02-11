const snowflakes = [];
const maxSnowflakes = 200;
const windFactor = 0.01;
const wind = 0;

class Snowflake {
  constructor() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = Math.random() * 2 + 1;
    this.speed = this.size / 2.5;
  }

  update(wind) {
    this.x += wind + (Math.random() - 0.5) * this.speed;
    this.y += this.speed;

    if (this.y > window.innerHeight) {
      this.y = -10;
      this.x = Math.random() * window.innerWidth;
    }

    if (this.x > window.innerWidth) {
      this.x = 0;
    }

    if (this.x < 0) {
      this.x = window.innerWidth;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

for (let i = 0; i < maxSnowflakes; i++) {
  snowflakes.push(new Snowflake());
}

function updateSnowflakes(wind) {
  snowflakes.forEach(snowflake => {
    snowflake.update(wind);
  });
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach(snowflake => {
    snowflake.draw(ctx);
  });
}

document.addEventListener('mousemove', event => {
  wind = (event.clientX - window.innerWidth / 2) * windFactor;
});

function animate() {
  updateSnowflakes(wind);
  drawSnowflakes();
  requestAnimationFrame(animate);
}

animate();
