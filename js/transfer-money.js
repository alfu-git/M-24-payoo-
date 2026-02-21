// MAIN EVENT //
const transferMoneyBtn = getId('transfer-money-btn');

transferMoneyBtn.addEventListener('click', function () {
  // GET USER VALUE //
  const transferMoneyNum = getValue('transfer-money-number');
  const transferMoneyAmount = getValue('transfer-money-amount');
  const transferMoneyPin = getValue('transfer-money-pin');


  // EMPTY VALIDATION //
  if (transferMoneyNum === '' && transferMoneyAmount === '' && transferMoneyPin === '') {
    alert('Enter all value!');
    return;
  }
  else if (transferMoneyNum === '') {
    alert('Enter the number!');
    return;
  }
  else if (transferMoneyAmount === '') {
    alert('Enter the amount!');
    return;
  }
  else if (transferMoneyPin === '') {
    alert('Enter the PIN!');
    return;
  }


  // LENGTH VALIDATION //
  if (transferMoneyNum.length !== 11) {
    alert('Number must be 11 characters!')
    return;
  } 
  else if (transferMoneyAmount > firstBalance) {
    alert('Insufficient Balance!');
    return;
  }
  else if (transferMoneyAmount <= 0) {
    alert('Invalid amount!');
    return;
  }
  else if (transferMoneyPin.length !== 4) {
    alert('PIN must be 4 characters!')
    return;
  }


  // VALIDATION //
  if (transferMoneyPin === mainPin) {
    // CALCULATE //
    const newBalance = balanceDecrease(transferMoneyAmount);
    setBalance(newBalance);
    alert(`
      ${transferMoneyAmount}$ transfer to ${transferMoneyNum} successfully from your account. 
      New balance is: ${newBalance}$
      `);
    

    // SEND THE HISTORY 
    transferMoneyHistory(transferMoneyAmount, transferMoneyNum, newBalance);

    
    // REFRESH ALL VALUE 
    document.getElementById('transfer-money-number').value = '';
    document.getElementById('transfer-money-amount').value = '';
    document.getElementById('transfer-money-pin').value = '';
  
    return;
  }
  else if (transferMoneyNum !== mainNum) {
    alert ('Wrong number!');
    return;
  }
  else if (transferMoneyPin !== mainPin) {
    alert ('Wrong PIN!');
    return;
  }
  else {
    alert ('Wrong number & PIN!');
    return;
  }
})