// Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value

const calc = (a, b) => {
    return (a<b)? a/b : a*b;
}

console.log(calc(10, 2))