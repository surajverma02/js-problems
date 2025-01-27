// Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

const str = "Prayagraj";

const rmLTEs = (str) => {
    const n = str.length;
    return str.substring(0, n-3);
}

console.log(rmLTEs(str))