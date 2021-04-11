var balance = 500;
const pin = 0000;
var withdrawAmount = 250;
//console.log(typeof(withdrawAmount))
var enterPin = 0000;
var ATMStatus = 1;
if(ATMStatus==0){
  console.log("ATM is not working");
}else if (enterPin != pin) {
  console.log("Please enter correct pin");
} else if (withdrawAmount % 1 != 0) {
  console.log("Please enter amount without decimals");
} else if (withdrawAmount > balance) {
  console.log("Insufficent balance");
} else {
  balance = balance - withdrawAmount;
  console.log("Remaining Balance: " + balance);
  console.log("Your Transaction is completed successfully. Thank you!!");
}
