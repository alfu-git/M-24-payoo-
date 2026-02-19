// MAIN EVENT //
const addMoneyBtn = getId('add-money-btn');


addMoneyBtn.addEventListener('click', function () {
  // GET USER VALUE //
  const addMoneyBank = getValue('add-money-bank');
  const addMoneyNum = getValue('add-money-number');
  const addMoneyAmount = getValue('add-money-amount');
  const addMoneyPin = getValue('add-money-pin');


  // EMPTY VALIDATION //
  if (addMoneyBank === '' && addMoneyNum === '' && addMoneyAmount === '' && addMoneyPin === '') {
    alert('Enter all value!');
    return;
  }
  else if (addMoneyBank === '') {
    alert('Select the bank!');
    return;
  }
  else if (addMoneyNum === '') {
    alert('Enter the number!');
    return;
  }
  else if (addMoneyAmount === '') {
    alert('Enter the amount!');
    return;
  }
  else if (addMoneyPin === '') {
    alert('Enter the PIN!');
    return;
  }


  // LENGTH VALIDATION //
  if (addMoneyNum.length !== 11) {
    alert('Number must be 11 characters!')
    return;
  } 
  else if (addMoneyAmount > 50000) {
    alert('Max limit: 50000$');
    return;
  }
  else if (addMoneyAmount <= 0) {
    alert('Invalid amount!');
    return;
  }
  else if (addMoneyPin.length !== 4) {
    alert('PIN must be 4 characters!')
    return;
  }


  // NUMBER & PIN VALIDATION //
  if (addMoneyNum === mainNum && addMoneyPin === mainPin) {
    // CALCULATE //
    const newBalance = balanceIncrease(addMoneyAmount);
    setBalance(newBalance);
    alert(`
      ${addMoneyAmount}$ successfully add to your account form ${addMoneyBank} 
      New balance is: ${newBalance}$
      `);

  // REFRESH ALL VALUE //
  document.getElementById('add-money-bank').value = '';
  document.getElementById('add-money-number').value = '';
  document.getElementById('add-money-amount').value = '';
  document.getElementById('add-money-pin').value = '';

    return;
  }
  else if (addMoneyNum !== mainNum) {
    alert ('Wrong number!');
    return;
  }
  else if (addMoneyPin !== mainPin) {
    alert ('Wrong PIN!');
    return;
  }
  else {
    alert ('Wrong number & PIN!');
    return;
  }
})