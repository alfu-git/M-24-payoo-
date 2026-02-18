

const mainNum = "01234567890";
const mainPin = "1234";

// get id //
function getId (id) {
  const getId = document.getElementById(id);
  return getId;
}

// get input value //
function getValue (id) {
  const getEl = document.getElementById(id);
  const value = getEl.value.trim();
  return value;
}

// get inner text //
function getInnerText (id) {
  const getInnerTextEl = document.getElementById(id);
  const text = getInnerTextEl.innerText;
  return text;
}

// set balance //
function setBalance (newBalance) {
  document.getElementById('first-balance').innerText = newBalance;
}