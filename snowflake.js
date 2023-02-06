/* javascript that adds floating snowflakes falling down the screen  that fall down */
var snowflakes = [];
var snowflakeCount = 30;
var snowflakeSize = 8;
var snowflakeSpeed = 1;
var snowflakeOpacity = 0.2;
var snowflakeColor = '#00BFFF';
var snowflakeBackground = '#01029';
var snowflakeZIndex = 100;
var snowflakeContainer = document.createElement('div');
snowflakeContainer.style.position = 'fixed';
snowflakeContainer.style.top = '0';
snowflakeContainer.style.left = '0';
snowflakeContainer.style.width = '100%';
snowflakeContainer.style.height = '100%';
snowflakeContainer.style.zIndex = snowflakeZIndex;
snowflakeContainer.style.overflow = 'hidden';
document.body.appendChild(snowflakeContainer);
function Snowflake() {
  this.element = document.createElement('div');
  this.element.style.position = 'absolute';
  this.element.style.top = '0';
  this.element.style.left = '0';
  this.element.style.width = snowflakeSize + 'px';
  this.element.style.height = snowflakeSize + 'px';
  this.element.style.background = snowflakeColor;
  this.element.style.opacity = snowflakeOpacity;
  this.element.style.borderRadius = '50%';
  this.element.style.boxShadow = '0 0 5px ' + snowflakeColor;
  this.element.style.zIndex = snowflakeZIndex;
  this.element.style.pointerEvents = 'none';
  this.x = Math.random() * window.innerWidth;
  this.y = Math.random() * window.innerHeight;
  this.speed = 0.5
  this.angle = Math.random() * Math.PI * 2;
  this.size = snowflakeSize + Math.random() * snowflakeSize;
  this.element.style.width = this.size + 'px';
  this.element.style.height = this.size + 'px';
  this.element.style.fontSize = this.size + 'px';
  this.element.style.lineHeight = this.size + 'px';
  this.element.innerHTML = '❄';
  snowflakeContainer.appendChild(this.element);
}
Snowflake.prototype.update = function() {
  this.x += Math.cos(this.angle) + this.speed;
  this.y += Math.sin(this.angle) + this.speed;
  this.element.style.left = this.x + 'px';
  this.element.style.top = this.y + 'px';
  if (this.x < 0 || this.x > window.innerWidth || this.y < 0 || this.y > window.innerHeight) {
    this.x = Math.random() * window.innerWidth;
    this.y = 0;
  }
};
function updateSnowflakes() {
  for (var i = 0; i < snowflakes.length; i++) {
    snowflakes[i].update();
  }
  requestAnimationFrame(updateSnowflakes);
}
for (var i = 0; i < snowflakeCount; i++) {
  snowflakes.push(new Snowflake());
}
updateSnowflakes();