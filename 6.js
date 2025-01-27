// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

const str = "prayagraj"

const extractChar = (str) => {
    const n = str.length;
    return str.slice(n-3, n);
}
console.log(extractChar(str));
