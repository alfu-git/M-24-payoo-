// add option-btn sound and add-money form show/hide //
document.getElementById('add-money-option').addEventListener('click', function () {
  const addMoneySec = getId('add-money-sec');
  addMoneySec.classList.toggle('hidden');
});


// the main event //
const addMoneyBtn = getId("add-money-btn");

addMoneyBtn.addEventListener("click", function () {
  // get user value //
  const addMoneyBank = getValue("add-money-bank");
  const addMoneyNum = getValue("add-money-number");
  const addMoneyAmount = getValue("add-money-amount");
  const addMoneyPin = getValue("add-money-pin");

  // set condition for select all item //
  if (addMoneyBank === "" && addMoneyNum === "" && addMoneyAmount === "" && addMoneyPin === "") {
    alert ('Select all the items !')
    return;
  }

  if (addMoneyBank === "") {
    alert("Select the bank !");
    return;
  } else if (addMoneyNum === "") {
    alert("Enter the number !");
  } else if (addMoneyAmount === "") {
    alert("Enter the amount !");
  } else if (addMoneyPin === "") {
    alert("Enter the PIN !");
  }

  // input length validation and check limit //
  if (addMoneyNum.length !== 11) {
    alert("Number must be 11 characters !");
    return;
  } else if (addMoneyAmount <= 0) {
    alert("Invalid Amount !");
  } else if (addMoneyAmount > "50000" || addMoneyAmount <= 99) {
    alert("Max limit: 50000/- & Min limit: 100/- !");
    return;
  } else if (addMoneyPin.length !== 4) {
    alert("PIN must be 4 characters !");
    return;
  }

  // number & pin validation and calculate and set the new balance //
  if (addMoneyNum === mainNum && addMoneyPin === mainPin) {
    const firstBalanceEl = document.getElementById('first-balance');
    let firstBalance = firstBalanceEl.innerText;

    const firstBalanceNum = Number(firstBalance);
    const newBalance = firstBalanceNum + Number(addMoneyAmount);
    setBalance(newBalance);
    alert (`
      ${addMoneyAmount}$ add successfully to your account from ${addMoneyBank}. 
      New balance is ${newBalance}$
      `);
      return;
  } else if (addMoneyNum !== mainNum && addMoneyPin !== mainPin) {
    alert("Wrong Number & PIN !");
    return;
  } else if (addMoneyNum !== mainNum) {
    alert("Wrong Number !");
    return;
  } else if (addMoneyPin !== mainPin) {
    alert("Wrong PIN !");
    return;
  }
});
