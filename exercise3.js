function addition(value) {
    console.log("Value is: " + value);
}
var firstVal = 42;
var secondVal = 1;
var sumOfVals = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);
function showdetails(value) {
    console.log("The number is: " + value);
    console.log("The hex is: " + value);
}
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
showdetails(decimal);
