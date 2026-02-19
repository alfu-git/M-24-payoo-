// MAIN EVENT //
const cashoutBtn = getId('cashout-btn');

cashoutBtn.addEventListener('click', function () {
  // GET USER VALUE //
  const cashoutNum = getValue('cashout-number');
  const cashoutAmount = getValue('cashout-amount');
  const cashoutPin = getValue('cashout-pin');


  // EMPTY VALIDATION //
  if (cashoutNum === '' && cashoutAmount === '' && cashoutPin === '') {
    alert('Enter all value!');
    return;
  }
  else if (cashoutNum === '') {
    alert('Enter the number!');
    return;
  }
  else if (cashoutAmount === '') {
    alert('Enter the amount!');
    return;
  }
  else if (cashoutPin === '') {
    alert('Enter the PIN!');
    return;
  }


  // LENGTH VALIDATION //
  if (cashoutNum.length !== 11) {
    alert('Number must be 11 characters!')
    return;
  } 
  else if (cashoutAmount > firstBalance) {
    alert('Insufficient Balance!');
    return;
  }
  else if (cashoutAmount <= 0) {
    alert('Invalid amount!');
    return;
  }
  else if (cashoutPin.length !== 4) {
    alert('PIN must be 4 characters!')
    return;
  }


  // NUMBER & PIN VALIDATION //
  if (cashoutNum === mainNum && cashoutPin === mainPin) {
    // CALCULATE //
    const newBalance = balanceDecrease(cashoutAmount);
    setBalance(newBalance);
    alert(`
      ${cashoutAmount}$ withdraw successfully from your account 
      New balance is: ${newBalance}$
      `);

  // REFRESH ALL VALUE //
  document.getElementById('cashout-number').value = '';
  document.getElementById('cashout-amount').value = '';
  document.getElementById('cashout-pin').value = '';

    return;
  }
  else if (cashoutNum !== mainNum) {
    alert ('Wrong number!');
    return;
  }
  else if (cashoutPin !== mainPin) {
    alert ('Wrong PIN!');
    return;
  }
  else {
    alert ('Wrong number & PIN!');
    return;
  }
})