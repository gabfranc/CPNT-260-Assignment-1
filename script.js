document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('myAudio');
  const playPauseCheckbox = document.getElementById('playPauseCheckbox');

  playPauseCheckbox.addEventListener('change', function () {
      if (playPauseCheckbox.checked) {
          audio.play();
      } else {
          audio.pause();
      }
  });
});
alert("HELLO!!!😍😍😍");
