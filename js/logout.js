// LOGOUT SOUND PLAY & HAPPEND LOGOUT //
const logoutBtn = getId('logout-btn');
const logoutSound = new Audio('./audio/option-btn-click-sound.wav');

logoutBtn.addEventListener('click', function () {
  logoutSound.play();

  logoutSound.onended = function () {
    window.location.assign('./index.html');
  }
})