//decaped idk how tf
var snowflakes = [];
var canvas;
var context;
var snowflakeCount = 100;
var blizzardActive = false;

// Snowflake object
function Snowflake(x, y, size, speed) {
this.x = x;
this.y = y;
this.size = size;
this.speed = speed;
}

// Initialize the canvas
function initializeCanvas() {
canvas = document.getElementById("snowfall");
context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

// Initialize snowflakes
function initializeSnowflakes() {
for (var i = 0; i < snowflakeCount; i++) {
var x = Math.random() * canvas.width;
var y = Math.random() * canvas.height;
var size = (Math.random() * 3) + 2;
var speed = (Math.random() * 1) + 0.5;
snowflakes.push(new Snowflake(x, y, size, speed));
}
}

// Draw snowflakes
function drawSnowflakes() {
context.clearRect(0, 0, canvas.width, canvas.height);
for (var i = 0; i < snowflakes.length; i++) {
var snowflake = snowflakes[i];
context.beginPath();
context.arc(snowflake.x, snowflake.y, snowflake.size, 0, 2 * Math.PI);
context.fillStyle = "white";
context.fill();
}
}

// Update snowflakes
function updateSnowflakes() {
for (var i = 0; i < snowflakes.length; i++) {
var snowflake = snowflakes[i];
snowflake.y += snowflake.speed;
if (snowflake.y > canvas.height + snowflake.size) {
snowflake.y = 0 - snowflake.size;
snowflake.x = Math.random() * canvas.width;
}
}
}

// Blizzard function
function startBlizzard() {
blizzardActive = true;
snowflakeCount = 500;
snowflakes = [];
initializeSnowflakes();
setInterval(function() {
updateSnowflakes();
drawSnowflakes();
}, 50);
}

// On click event to start blizzard
document.getElementById("startBtn").addEventListener("click", startBlizzard);
// code for startBlizzard function
function startBlizzard() {
  console.log("Blizzard started!");
  // additional code to execute when start button is clicked
}

// code to add more event listeners for other buttons, if needed
document.getElementById("stopBtn").addEventListener("click", stopBlizzard);

// code for stopBlizzard function
function stopBlizzard() {
  console.log("Blizzard stopped!");
  // additional code to execute when stop button is clicked
}

