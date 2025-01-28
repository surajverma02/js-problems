// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

const a = "Prayagraj is uttar pradesh's";
const b = " city.";

const concat = (a, b) => {
  return a.indexOf(b) === -1 ? a + b : b + a;
};
console.log(concat(a, b));
