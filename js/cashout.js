// add-money form show/hide //
document.getElementById('cashout-option').addEventListener('click', function () {
  const cashoutSec = getId('cashout-sec');
  cashoutSec.classList.toggle('hidden');
});


// the main event //
const cashoutBtn = getId("cashout-btn");

cashoutBtn.addEventListener("click", function () {
  // get user value //
  const cashoutNum = getValue("cashout-number");
  const cashoutAmount = getValue("cashout-amount");
  const cashoutPin = getValue("cashout-pin");


  // set condition for select all item //
  if (cashoutNum === "" && cashoutAmount === "" && cashoutPin === "") {
    alert ('Select all the items !')
    return;
  }

  if (cashoutNum === "") {
    alert("Enter the number !");
  } else if (cashoutAmount === "") {
    alert("Enter the amount !");
  } else if (cashoutPin === "") {
    alert("Enter the PIN !");
  }


  // input length validation and check limit //
  if (cashoutNum.length !== 11) {
    alert("Number must be 11 characters !");
    return;
  } else if (cashoutAmount <= 0) {
    alert("Invalid Amount !");
  } else if (cashoutAmount > firstBalance) {
    alert("Insufficient Balance !");
    return;
  } else if (cashoutPin.length !== 4) {
    alert("PIN must be 4 characters !");
    return;
  }


  // number & pin validation and calculate and set the new balance //
  if (cashoutNum === mainNum && cashoutPin === mainPin) {
    const firstBalanceEl = document.getElementById('first-balance');
    let firstBalance = firstBalanceEl.innerText;

    const firstBalanceNum = Number(firstBalance);
    const newBalance = firstBalanceNum - Number(cashoutAmount);
    setBalance(newBalance);
    alert (`
      ${cashoutAmount}$ withdraw successfully from your account. 
      New balance is ${newBalance}$.
      `);
      return;
  } else if (cashoutNum !== mainNum && cashoutPin !== mainPin) {
    alert("Wrong Number & PIN !");
    return;
  } else if (cashoutNum !== mainNum) {
    alert("Wrong Number !");
    return;
  } else if (cashoutPin !== mainPin) {
    alert("Wrong PIN !");
    return;
  }
});
