// MAIN EVENT //
const payBillBtn = getId('pay-bill-btn');

payBillBtn.addEventListener('click', function () {
  // GET USER VALUE //
  const payBillOption = getValue('pay-bill-option');
  const payBillNum = getValue('pay-bill-number');
  const payBillAmount = getValue('pay-bill-amount');
  const payBillPin = getValue('pay-bill-pin');


  // EMPTY VALIDATION //
  if (payBillOption === '' && payBillNum === '' && payBillAmount === '' && payBillPin === '') {
    alert('Enter all value!');
    return;
  }
  else if (payBillOption === '') {
    alert('Select the bill option!');
    return;
  }
  else if (payBillNum === '') {
    alert('Enter the number!');
    return;
  }
  else if (payBillAmount === '') {
    alert('Enter the amount!');
    return;
  }
  else if (payBillPin === '') {
    alert('Enter the PIN!');
    return;
  }


  // LENGTH VALIDATION //
  if (payBillNum.length !== 11) {
    alert('Number must be 11 characters!')
    return;
  } 
  else if (payBillAmount > firstBalance) {
    alert('Insufficient Balance!');
    return;
  }
  else if (payBillAmount <= 0) {
    alert('Invalid amount!');
    return;
  }
  else if (payBillPin.length !== 4) {
    alert('PIN must be 4 characters!')
    return;
  }


  // NUMBER & PIN VALIDATION //
  if (payBillPin === mainPin) {
    // CALCULATE //
    const newBalance = balanceDecrease(payBillAmount);
    setBalance(newBalance);
    alert(`
      You pay ${payBillAmount}$ for ${payBillOption}. 
      New balance is: ${newBalance}$
      `);

  // REFRESH ALL VALUE //
  document.getElementById('pay-bill-option').value = '';
  document.getElementById('pay-bill-number').value = '';
  document.getElementById('pay-bill-amount').value = '';
  document.getElementById('pay-bill-pin').value = '';

    return;
  }
  else {
    alert ('Wrong PIN!');
    return;
  }
})