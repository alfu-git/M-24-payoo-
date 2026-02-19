// MAIN NUMBER & PIN & BONUS COUPON //
const mainNum = '01234567890';
const mainPin = '1234';
const bonusCoupon = '7676';


// FIRST BALANCE //
const firstBalance = Number(getInnerText('first-balance'));


// GET ELEMENT //
function getId (id) {
  return document.getElementById(id);
}


// GET INNER TEXT //
function getInnerText (id) {
  const el = document.getElementById(id);
  const text = el.innerText;
  return text;
}


// GET VALUE //
function getValue (id) {
  const el = document.getElementById(id);
  const value = el.value.trim();
  return value;
}


// AMOUNT INCREASING //
function balanceIncrease (amount) {
  return Number(amount) + firstBalance;
}


// AMOUNT DECREASING //
function balanceDecrease (amount) {
  return firstBalance - Number(amount);
}

// SET AMOUNT //
function setBalance (newAmount) {
  getId('first-balance').innerText = newAmount;
}

// SHOW/HIDE FORM //
function showOnly (id) {
  // GET ALL FORMS 
  const forms = document.querySelectorAll('.form');

  // PICK EVERY SINGLE FORM 
  forms.forEach(form => {
    if (form.id === id) {
      form.classList.toggle('hidden');
    }
    else {
      form.classList.add('hidden');
    }
  })
}


// ADD SOUND FOR BTN CLICK //
const optionBtns = document.querySelectorAll('.option-btn');
const optionBtnSound = new Audio('./audio/option-btn-click-sound.wav');

optionBtns.forEach(optionBtn => {
  optionBtn.addEventListener('click', function () {
    optionBtnSound.currentTime = 0;
    optionBtnSound.play();
  })
})


// ADD SOUND FOR TRANSACTIONS DONE BTN //
const doneBtns = document.querySelectorAll('.done-btn');
const doneBtnSound = new Audio('./audio/done-btn-click-sound.wav');

doneBtns.forEach(doneBtn => {
  doneBtn.addEventListener('click', function () {
    doneBtnSound.currentTime = 0;
    doneBtnSound.play();
  })
})