// Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number

const roundNum = (a) => Math.round(a * 100) / 100;

console.log(roundNum(2.36598))