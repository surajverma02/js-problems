// Write a function that takes a string (a) as argument. Extract the first half a. Return the result

const str = "Alahabad"

const firstHalf = (str) => {
    n = str.length;
    return str.slice(0, n/2);
}

console.log(firstHalf(str));