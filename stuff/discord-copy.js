var sound = new Howl({
  src: ['stuff/click.mp3'],
  html5: true
});
console.log("Ma discord is: kallosus16(2)#6138")

document.querySelector(".social.discord").addEventListener("click", function () {
  const tag = 'kallosus16(2)#6138';
  const notification = document.querySelector('#clipboard-notification');

  navigator.clipboard.writeText(tag)
    .then(() => {
      notification.style.display = 'block';
      setTimeout(() => {
        notification.style.display = 'none';
      }, 3000);
    })
    .catch(error => {
      console.error('Failed to copy text: ', error);
    });
  
  sound.play();
});
