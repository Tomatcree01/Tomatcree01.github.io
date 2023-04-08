$(function () {
  //--------------------------Sound stuff--------------------------------------
  var click = new Howl({
    src: ['stuff/click.mp3'],
    volume: 0.6
  });

  var notification = $('#clipboard-notification');
  var discordSocial = $('.social.discord');

  discordSocial.on('click', function () {
    var tag = 'kallosus16(2)#6138';

    navigator.clipboard.writeText(tag)
      .then(function () {
        notification.css('display', 'block');
        setTimeout(function () {
          notification.css('animation', 'notification-fade-out 0.5s ease-in-out forwards');
        }, 5000);
      })
      .catch(console.error);

    // Playing the sound
    click.play();
  });

  var sound = new Howl({
    src: ['stuff/sound.mp3'],
    loop: true,
    volume: 0.1,
    autoplay: true,
    autoplayOn: [15000, 90000]
  });

  //-------------------------MISC functions---------------------------------------

  // Get the clock container
  var clock = $('.clock');
  // Function to display the time in 12-hour format
  function displayTime() {
    // Get the current time
    var now = new Date();
    // Get the hours, minutes, and seconds
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    // Convert hours to 12-hour format
    hours = (hours > 12) ? hours - 12 : hours;
    // Add leading zeros to minutes and seconds
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    // Update the clock text
    clock.html(hours + ":" + minutes + ":" + seconds);
  }

  // Call the displayTime function every 1 ms
  setInterval(displayTime, 1);
});
