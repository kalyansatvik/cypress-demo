var age = "twenty five";
if (age < 18) {
  console.log("Not eligible for drivers license");
} else if (typeof age != "number") {
  console.log("Age should be a number. Please enter age between 18 - 60:");
} else if (age > 60) {
  console.log("Age limit exceeded");
} else {
  console.log("Eligible");
}
