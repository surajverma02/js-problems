// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.

const calculates = (a,b,c,d,e,f) => (((((a+b)-c)*d)/e)**f);

console.log(calculates(6,5,4,3,2,1));