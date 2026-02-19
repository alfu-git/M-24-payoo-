// MAIN NUMBER & PIN //
const mainNum = '01234567890';
const mainPin = '1234';

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