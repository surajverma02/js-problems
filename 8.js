// Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.

const str = "Delhi is a beautiful place";

const indexOfIs = (str) => str.match('is').index;
console.log(indexOfIs(str));