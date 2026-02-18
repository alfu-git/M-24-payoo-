const loginBtn = getId('login-btn');
const loginClickSound = new Audio('./audio/login-button-click-sound.wav');

loginBtn.addEventListener("click", function () {
  loginClickSound.play();
  
  const inputNumValue = getValue('input-number');

  const inputPinValue = getValue('input-pin');


  if (inputNumValue.length !== 11 && inputPinValue.length !== 4) {
    alert("Number must be 11 characters and PIN must be 4 characters!");
    return;
  } else if (inputNumValue.length !== 11) {
    alert("Number must be 11 characters!");
    return;
  } else if (inputPinValue.length !== 4) {
    alert("PIN must be 4 characters!");
    return;
  }


  if (inputNumValue === mainNum && inputPinValue === mainPin) {
    alert("Login Successfull");
    window.location.assign("./home.html");
  }else if (inputNumValue !== mainNum && inputPinValue !== mainPin) {
    alert("Login Failed! Wrong Number & PIN.");
  } else if (inputNumValue !== mainNum) {
    alert("Login Failed! Wrong Number.");
  } else if (inputPinValue !== mainPin) {
    alert("Login Failed! Wrong PIN.");
  }
});
