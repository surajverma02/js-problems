// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

const str = "alahabad";

const removeElements = (str) => {
    return str.slice(3);
}

console.log(removeElements(str));