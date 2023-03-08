// Creating a new Howler object
var sound = new Howl({
  src: ['/stuff/click.mp3'],
  volume: 0.8
});

const notification = document.querySelector('#clipboard-notification');
const discordSocial = document.querySelector(".social.discord");

discordSocial.addEventListener("click", function () {
  const tag = 'kallosus16(2)#6138';
  
  navigator.clipboard.writeText(tag)
    .then(() => {
      notification.style.display = 'block';
      setTimeout(() => {
        notification.style.display = 'none';
      }, 3000);
    })
    .catch(console.error);
  
  // Playing the sound
  sound.play();
});
