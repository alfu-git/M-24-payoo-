// MAIN EVENT //
const getBonusBtn = getId('get-bonus-btn');

getBonusBtn.addEventListener('click', function () {
  // GET USER VALUE //
  const getBonusNum = getValue('get-bonus-number');


  // EMPTY VALIDATION //
  if (getBonusNum === '') {
    alert('Enter the coupon number!');
    return;
  }


  // LENGTH VALIDATION //
  if (getBonusNum.length !== 4) {
    alert('Coupon number must be 4!')
    return;
  } 


  // NUMBER & PIN VALIDATION //
  if (getBonusNum === bonusCoupon) {
    // CALCULATE //
    const bonus = '20000';
    const newBalance = firstBalance + Number(bonus);
    setBalance(newBalance);
    alert(`
      Congratulations! You got bonus ${bonus}$
      New balance is: ${newBalance}$
      `);
    

    // SEND HISTORY
    getBonusHistory(bonus, newBalance);


    
  // REFRESH ALL VALUE //
  document.getElementById('get-bonus-number').value = '';
  return;
  }
  else if (getBonusNum !== bonusCoupon) {
    alert ('Wrong coupon!');
    return;
  }
})