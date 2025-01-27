// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

const a  = [2, 5, 4, 1];

const element = (a, n) => {
    if(n <= a.length) return a[n-1];
    return "OutOfBound";
}

console.log(element(a, 5));